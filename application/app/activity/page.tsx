// import Timer from "@/components/timer";
// import { createClient } from "@/utils/supabase/server";

// export default async function Activity() {
//   const supabase = await createClient();

//   const { data: Activity, error } = await supabase.from("Activity").select("*");

//   if (error) {
//     console.error("Error fetching activities:", error.message);
//   }
//   return (
//     <div>
//       <pre>{JSON.stringify(Activity, null, 2)}</pre>
//       <Timer />
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Clock,
  Play,
  RotateCcw,
  Zap,
  Calendar,
} from "lucide-react";
import Timer from "@/components/timer";

// Mock data - replace with actual data fetching in a real application
const mockActivities = [
  { id: 1, name: "Coding", icon: "💻" },
  { id: 2, name: "Learning", icon: "📚" },
  { id: 3, name: "Writing", icon: "✍️" },
  { id: 4, name: "Studying", icon: "🎓" },
];

const mockHistory = [
  { id: 1, name: "Coding", duration: 25, xp: 20, date: "2023-05-15" },
  { id: 2, name: "Learning", duration: 45, xp: 35, date: "2023-05-15" },
  { id: 3, name: "Writing", duration: 30, xp: 25, date: "2023-05-14" },
  { id: 4, name: "Studying", duration: 60, xp: 45, date: "2023-05-14" },
];

export default function ActivityPage() {
  const [selectedActivity, setSelectedActivity] = useState(mockActivities[0]);
  const [timerState, setTimerState] = useState<"idle" | "running" | "paused">(
    "idle"
  );
  const [timeRemaining, setTimeRemaining] = useState(1500); // 25 minutes in seconds
  const [progress, setProgress] = useState(0);
  console.log(progress);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerState === "running") {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval!);
            setTimerState("idle");
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerState]);

  useEffect(() => {
    setProgress(((1500 - timeRemaining) / 1500) * 100);
  }, [timeRemaining]);

  // const formatTime = (seconds: number): string => {
  //   const mins = Math.floor(seconds / 60);
  //   const secs = seconds % 60;
  //   return `${mins.toString().padStart(2, "0")}:${secs
  //     .toString()
  //     .padStart(2, "0")}`;
  // };

  const handleTimerControl = (action: "start" | "pause" | "stop") => {
    switch (action) {
      case "start":
        setTimerState("running");
        break;
      case "pause":
        setTimerState("paused");
        break;
      case "stop":
        setTimerState("idle");
        setTimeRemaining(1500);
        setProgress(0);
        break;
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Activity Tracker</h1>

      <Card>
        <CardHeader>
          <CardTitle>Start New Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Select
              value={selectedActivity.id.toString()}
              onValueChange={(value) =>
                setSelectedActivity(
                  mockActivities.find((a) => a.id.toString() === value)!
                )
              }
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select activity" />
              </SelectTrigger>
              <SelectContent>
                {mockActivities.map((activity) => (
                  <SelectItem key={activity.id} value={activity.id.toString()}>
                    {activity.icon} {activity.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              onClick={() => handleTimerControl("start")}
              disabled={timerState === "running"}
            >
              <Play className="mr-2 h-4 w-4" />
              Start Activity
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Activity: {selectedActivity.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <Timer  />
          {/* <div className="flex flex-col items-center gap-4">
            <div className="text-6xl font-bold tabular-nums">
              {formatTime(timeRemaining)}
            </div>
            <Progress value={progress} className="w-full" />
            <div className="flex gap-2">
              {timerState === "running" ? (
                <Button onClick={() => handleTimerControl("pause")}>
                  <Pause className="mr-2 h-4 w-4" /> Pause
                </Button>
              ) : (
                <Button
                  onClick={() => handleTimerControl("start")}
                  disabled={timerState === "running"}
                >
                  <Play className="mr-2 h-4 w-4" />{" "}
                  {timerState === "paused" ? "Resume" : "Start"}
                </Button>
              )}
              <Button
                variant="outline"
                onClick={() => handleTimerControl("stop")}
              >
                <Square className="mr-2 h-4 w-4" /> Stop
              </Button>
            </div>
          </div> */}
        </CardContent>
      </Card>

      <Tabs defaultValue="history">
        <TabsList>
          <TabsTrigger value="history">Activity History</TabsTrigger>
          <TabsTrigger value="stats">Activity Stats</TabsTrigger>
        </TabsList>
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockHistory.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between p-2 bg-secondary rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{activity.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span>{activity.duration} min</span>
                      <span className="flex items-center gap-1">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        {activity.xp} XP
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {activity.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="stats">
          <Card>
            <CardHeader>
              <CardTitle>Activity Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                  <span className="text-2xl font-bold">160 min</span>
                  <span className="text-sm text-muted-foreground">
                    Total Time This Week
                  </span>
                </div>
                <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                  <span className="text-2xl font-bold">125 XP</span>
                  <span className="text-sm text-muted-foreground">
                    Total XP This Week
                  </span>
                </div>
                <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                  <span className="text-2xl font-bold">Coding</span>
                  <span className="text-sm text-muted-foreground">
                    Most Frequent Activity
                  </span>
                </div>
                <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                  <span className="text-2xl font-bold">45 min</span>
                  <span className="text-sm text-muted-foreground">
                    Average Session Duration
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Plan Tomorrow
            </Button>
            <Button variant="outline">
              <RotateCcw className="mr-2 h-4 w-4" />
              View Streaks
            </Button>
            <Button variant="outline">
              <Zap className="mr-2 h-4 w-4" />
              XP Leaderboard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}