"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, Square, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

interface TimerFeatures {
  states: ["idle", "running", "paused", "completed"];
  controls: ["start", "pause", "resume", "stop"];
  display: {
    timeRemaining: string;
    progress: number;
    currentInterval: string;
  };
  notifications: {
    halfway: boolean;
    fiveMin: boolean;
    completion: boolean;
  };
}
export default function Timer() {
  const [state, setState] = useState<TimerFeatures["states"][number]>("idle");
    const [timeRemaining, setTimeRemaining] = useState(1500); // 25 minutes in seconds
  const [progress, setProgress] = useState(0);
  const [currentInterval, setCurrentInterval] = useState("Work");
  const [notifications, setNotifications] = useState({
    halfway: false,
    fiveMin: false,
    completion: false,
  });
  const { toast } = useToast();

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const resetTimer = useCallback(() => {
    setState("idle");
    setTimeRemaining(1500);
    setProgress(0);
    setCurrentInterval("Work");
    setNotifications({ halfway: false, fiveMin: false, completion: false });
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (state === "running") {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(interval!);
            setState("completed");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [state]);

  useEffect(() => {
    setProgress(((1500 - timeRemaining) / 1500) * 100);

    if (timeRemaining === 750 && !notifications.halfway) {
      toast({ title: "Halfway there!" });
      setNotifications((prev) => ({ ...prev, halfway: true }));
    } else if (timeRemaining === 300 && !notifications.fiveMin) {
      toast({ title: "5 minutes remaining!" });
      setNotifications((prev) => ({ ...prev, fiveMin: true }));
    } else if (timeRemaining === 0 && !notifications.completion) {
      toast({ title: "Timer completed!" });
      setNotifications((prev) => ({ ...prev, completion: true }));
    }
  }, [timeRemaining, notifications]);

  const handleControl = (control: TimerFeatures["controls"][number]) => {
    switch (control) {
      case "start":
      case "resume":
        setState("running");
        break;
      case "pause":
        setState("paused");
        break;
      case "stop":
        resetTimer();
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">
          {currentInterval}
        </h2>
        <div className="text-6xl font-bold text-center mb-6 dark:text-white">
          {formatTime(timeRemaining)}
        </div>
        <Progress value={progress} className="mb-6" />
        <div className="flex justify-center space-x-4 mb-6">
          {state === "idle" && (
            <Button onClick={() => handleControl("start")}>
              <Play className="mr-2 h-4 w-4" /> Start
            </Button>
          )}
          {state === "running" && (
            <Button onClick={() => handleControl("pause")}>
              <Pause className="mr-2 h-4 w-4" /> Pause
            </Button>
          )}
          {state === "paused" && (
            <Button onClick={() => handleControl("resume")}>
              <Play className="mr-2 h-4 w-4" /> Resume
            </Button>
          )}
          {state !== "idle" && (
            <Button variant="destructive" onClick={() => handleControl("stop")}>
              <Square className="mr-2 h-4 w-4" /> Stop
            </Button>
          )}
        </div>
        <div className="flex justify-center">
          <Button variant="outline" onClick={resetTimer}>
            <RotateCcw className="mr-2 h-4 w-4" /> Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
