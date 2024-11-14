"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Clock, Award, Zap, Flame, Calendar } from "lucide-react";
import { Bar, BarChart } from "recharts";

// Mock data - replace with actual data fetching in a real application
const mockActivities = [
  { name: "Coding", duration: 120, xp: 50 },
  { name: "Learning", duration: 60, xp: 30 },
  { name: "Writing", duration: 45, xp: 25 },
  { name: "Studying", duration: 90, xp: 40 },
];

const mockAchievements = [
  {
    name: "First Timer",
    description: "Complete your first session",
    progress: 100,
  },
  {
    name: "Streak Master",
    description: "Maintain a 7-day streak",
    progress: 70,
  },
  { name: "XP Collector", description: "Earn 1000 XP", progress: 45 },
];

const mockWeeklyData = [
  { day: "Mon", xp: 120 },
  { day: "Tue", xp: 150 },
  { day: "Wed", xp: 180 },
  { day: "Thu", xp: 140 },
  { day: "Fri", xp: 160 },
  { day: "Sat", xp: 200 },
  { day: "Sun", xp: 190 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;
export default function Dashboard() {
  const [currentStreak] = useState(5);
  const [totalXP] = useState(750);
  const [level, setLevel] = useState(1);
  const [xpToNextLevel, setXpToNextLevel] = useState(250);

  useEffect(() => {
    // Calculate level and XP to next level
    const newLevel = Math.floor(totalXP / 1000) + 1;
    setLevel(newLevel);
    setXpToNextLevel(1000 - (totalXP % 1000));
  }, [totalXP]);

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Productivity Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Current Streak
            </CardTitle>
            <Flame className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentStreak} days</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total XP</CardTitle>
            <Zap className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalXP} XP</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Level</CardTitle>
            <Award className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Level {level}</div>
            <Progress value={(1000 - xpToNextLevel) / 10} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              {xpToNextLevel} XP to next level
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="activities" className="space-y-4">
        <TabsList>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
        </TabsList>
        <TabsContent value="activities" className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
          {mockActivities.map((activity, index) => (
            <Card key={index}>
              <CardContent className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">{activity.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.duration} minutes
                    </p>
                  </div>
                </div>
                <div className="font-semibold text-primary">
                  +{activity.xp} XP
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="achievements" className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
          {mockAchievements.map((achievement, index) => (
            <Card key={index}>
              <CardContent className="py-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{achievement.name}</h3>
                  <span className="text-sm text-muted-foreground">
                    {achievement.progress}%
                  </span>
                </div>
                <Progress value={achievement.progress} className="mb-2" />
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="stats">
          <h2 className="text-2xl font-semibold mb-4">Weekly XP</h2>
          <Card>
            <CardContent className="py-4">
              <ChartContainer
                config={chartConfig}
                className="max-h-[400px] w-full"
              >
                <BarChart accessibilityLayer data={mockWeeklyData}>
                  <Bar dataKey="xp" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Start New Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Button>
              <Clock className="mr-2 h-4 w-4" />
              Start Timer
            </Button>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Plan Day
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
