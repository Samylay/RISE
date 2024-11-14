"use client";
import { Home, Search, Bell, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function BottomBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto pt-3">
        <Button
          variant="ghost"
          className={`inline-flex flex-col items-center justify-center px-5 group ${
            pathname === "/"
              ? "text-[var(--rise-primary)] dark:text-[var(--rise-primary)]"
              : ""
          }`}
        >
          <Home
            className={`w-5 h-5 mb-1 ${
              pathname === "/"
                ? "text-[var(--rise-primary)] dark:text-[var(--rise-primary)]"
                : "text-gray-500 dark:text-gray-400 group-hover:text-[var(--rise-primary)] dark:group-hover:text-[var(--rise-primary)]"
            }`}
          />
          <span
            className={`text-xs ${
              pathname === "/"
                ? "text-[var(--rise-primary)] dark:text-[var(--rise-primary)]"
                : "text-gray-500 dark:text-gray-400 group-hover:text-[var(--rise-primary)] dark:group-hover:text-[var(--rise-primary)]"
            }`}
          >
            Home
          </span>
        </Button>

        <Button
          variant="ghost"
          className={`inline-flex flex-col items-center justify-center px-5 dark:hover:bg-gray-800 group ${
            pathname === "/search"
              ? "text-[var(--rise-primary)] dark:text-[var(--rise-primary)]"
              : ""
          }`}
        >
          <Search
            className={`w-5 h-5 mb-1 ${
              pathname === "/search"
                ? "text-[var(--rise-primary)] dark:text-[var(--rise-primary)]"
                : "text-gray-500 dark:text-gray-400 group-hover:text-[var(--rise-primary)] dark:group-hover:text-[var(--rise-primary)]"
            }`}
          />
          <span
            className={`text-xs ${
              pathname === "/search"
                ? "text-[var(--rise-primary)] dark:text-[var(--rise-primary)]"
                : "text-gray-500 dark:text-gray-400 group-hover:text-[var(--rise-primary)] dark:group-hover:text-[var(--rise-primary)]"
            }`}
          >
            Search
          </span>
        </Button>

        <Button
          variant="default"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-blue-700 bg-blue-600 rounded-full -mt-6 shadow-lg"
        >
          <Plus className="w-6 h-6 text-white" />
          <span className="sr-only">Add</span>
        </Button>

        <Button
          variant="ghost"
          className={`inline-flex flex-col items-center justify-center px-5 dark:hover:bg-gray-800 group ${
            pathname === "/notifications"
              ? "text-[var(--rise-primary)] dark:text-[var(--rise-primary)]"
              : ""
          }`}
        >
          <Bell
            className={`w-5 h-5 mb-1 ${
              pathname === "/notifications"
                ? "text-[var(--rise-primary)] dark:text-[var(--rise-primary)]"
                : "text-gray-500 dark:text-gray-400 group-hover:text-[var(--rise-primary)] dark:group-hover:text-[var(--rise-primary)]"
            }`}
          />
          <span
            className={`text-xs ${
              pathname === "/notifications"
                ? "text-[var(--rise-primary)] dark:text-[var(--rise-primary)]"
                : "text-gray-500 dark:text-gray-400 group-hover:text-[var(--rise-primary)] dark:group-hover:text-[var(--rise-primary)]"
            }`}
          >
            Notifications
          </span>
        </Button>

        <Button
          variant="ghost"
          className={`inline-flex flex-col items-center justify-center px-5 dark:hover:bg-gray-800 group ${
            pathname === "/profile"
              ? "text-[var(--rise-primary)] dark:text-[var(--rise-primary)]"
              : ""
          }`}
        >
          <User
            className={`w-5 h-5 mb-1 ${
              pathname === "/profile"
                ? "text-[var(--rise-primary)] dark:text-[var(--rise-primary)]"
                : "text-gray-500 dark:text-gray-400 group-hover:text-[var(--rise-primary)] dark:group-hover:text-[var(--rise-primary)]"
            }`}
          />
          <span
            className={`text-xs ${
              pathname === "/profile"
                ? "text-[var(--rise-primary)] dark:text-[var(--rise-primary)]"
                : "text-gray-500 dark:text-gray-400 group-hover:text-[var(--rise-primary)] dark:group-hover:text-[var(--rise-primary)]"
            }`}
          >
            Profile
          </span>
        </Button>
      </div>
    </div>
  );
}
