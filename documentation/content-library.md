# 📚 Content Library

## 🎯 Motivational Messages

### Daily Greetings
| Time of Day | Message | Usage |
|-------------|---------|--------|
| Morning (5-11) | • "Ready to rise and conquer!" <br>• "A new day, new heights to reach!" <br>• "Your journey continues. Ready?" | App open |
| Afternoon (12-17) | • "Keep the momentum going!" <br>• "Still climbing higher!" <br>• "Making progress, one step at a time." | App open |
| Evening (18-23) | • "Finish strong today!" <br>• "Last push for today!" <br>• "End the day on a high note!" | App open |

### Achievement Messages
```typescript
const achievementMessages = {
  unlock: [
    "Achievement Unlocked: ${achievementName}! 🏆",
    "New milestone reached! ${achievementName} 🌟",
    "You've mastered ${achievementName}! ⭐"
  ],
  progress: [
    "${percentage}% progress on ${achievementName}!",
    "Getting closer to ${achievementName}!",
    "Keep going! ${remainingProgress} more to unlock ${achievementName}!"
  ],
  streak: [
    "${streakCount} days and counting! 🔥",
    "Unstoppable! Day ${streakCount} achieved!",
    "Your dedication is paying off! ${streakCount} days strong!"
  ]
};
```

## 📝 Activity Messages

### Timer States
| State | Message | Animation |
|-------|---------|-----------|
| Start | "Focus time begins! 🎯" | Fade in |
| Halfway | "Halfway there! Keep going! 💪" | Pulse |
| Almost Done | "Final stretch! You've got this! 🚀" | Pulse |
| Complete | "Session complete! Well done! 🌟" | Celebration |

### Break Messages
```typescript
const breakMessages = {
  start: [
    "Time for a quick recharge! ⚡",
    "Take a breather, you've earned it! 😌",
    "Short break time! Rest up! 🌿"
  ],
  end: [
    "Break complete! Ready to continue? 🎯",
    "Recharged and ready? Let's go! 💪",
    "Back to rising higher! 🚀"
  ]
};
```

## 🏆 Achievement Library

### Milestone Achievements
| Name | Description | Requirements | XP Reward |
|------|-------------|--------------|-----------|
| First Steps | "Begin your journey" | Complete first activity | 50 XP |
| Rising Star | "Reach level 5" | Reach Level 5 | 100 XP |
| Breakthrough | "Reach level 10" | Reach Level 10 | 200 XP |
| Ascendant | "Reach level 25" | Reach Level 25 | 500 XP |

### Streak Achievements
| Name | Description | Requirements | XP Reward |
|------|-------------|--------------|-----------|
| Consistent | "7-day streak" | 7-day streak | 100 XP |
| Dedicated | "30-day streak" | 30-day streak | 300 XP |
| Unstoppable | "100-day streak" | 100-day streak | 1000 XP |
| Legendary | "365-day streak" | 365-day streak | 5000 XP |

### Special Achievements
```typescript
const specialAchievements = {
  earlyBird: {
    name: "Early Bird",
    description: "Complete an activity before 8 AM",
    xp: 50
  },
  nightOwl: {
    name: "Night Owl",
    description: "Complete an activity after 10 PM",
    xp: 50
  },
  weekendWarrior: {
    name: "Weekend Warrior",
    description: "Complete all planned weekend activities",
    xp: 100
  }
};
```

## ⚠️ Error Messages

### System Errors
```typescript
const systemErrors = {
  save: {
    title: "Save Error",
    message: "Unable to save progress. Don't worry, keep going!",
    action: "Retry"
  },
  load: {
    title: "Load Error",
    message: "Cannot load previous data. Starting fresh!",
    action: "Continue"
  },
  sync: {
    title: "Sync Error",
    message: "Will try again later. Your progress is safe!",
    action: "Acknowledge"
  }
};
```

### User Guidance
| Situation | Message | Action |
|-----------|---------|--------|
| Invalid Duration | "Let's keep it between 5 and 120 minutes" | Adjust Input |
| Missed Activity | "Yesterday's activity wasn't completed. No worries, start fresh!" | Continue |
| Rest Day | "Rest day marked. Your streak is safe!" | Acknowledge |

## 🎮 Level Titles

### Progress Titles
```typescript
const levelTitles = {
  1: "Novice Explorer",
  5: "Rising Apprentice",
  10: "Dedicated Achiever",
  15: "Skilled Pathfinder",
  20: "Expert Adventurer",
  25: "Master of Growth",
  30: "Growth Legend",
  40: "Ascended Master",
  50: "Rising Immortal",
  100: "Ultimate Rising Star"
};
```

## 📱 UI Text

### Button Labels
| Context | Label | Action |
|---------|-------|--------|
| Timer | "Start Focus" | Begin timer |
| Break | "Take Break" | Start break |
| Planning | "Plan Day" | Open planner |
| Achievement | "View All" | Show achievements |

### Section Headers
```typescript
const headers = {
  dashboard: "Your Growth Journey",
  planning: "Daily Planning",
  achievements: "Achievement Gallery",
  statistics: "Progress Insights",
  settings: "Customize RISE"
};
```

## 🔔 Notification Templates
[Reference previous Notification Templates document]

## 🎨 Loading States
| State | Message | Animation |
|-------|---------|-----------|
| Initial Load | "Preparing your journey..." | Pulse |
| Saving | "Recording progress..." | Spin |
| Updating | "Leveling up..." | Sparkle |
| Syncing | "Syncing achievements..." | Wave |

## 🔗 Related Pages
- [[Brand Guidelines]]
- [[User Experience]]
- [[Feature Specifications]]
- [[Technical Documentation]]

Would you like me to:
1. Continue with the next document?
2. Add more message variations?
3. Include more achievement descriptions?
4. Add more specific content categories?

Let me know your preference and I'll proceed accordingly.