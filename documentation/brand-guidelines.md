# 🎨 Brand Guidelines

## 🎯 Brand Identity
### Core Message
RISE transforms personal development into an engaging journey where every action contributes to measurable growth.

### Brand Values
- Progress over perfection
- Consistency builds excellence
- Growth mindset
- Personal empowerment
- Gamified motivation

## 🎨 Color System

### Primary Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Rise Purple | `#8B5CF6` | Primary actions, key UI elements |
| Rise Green | `#10B981` | Success, progress indicators |
| Rise Amber | `#F59E0B` | Achievements, rewards |

### Secondary Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Dark Slate | `#1E293B` | Primary text |
| Slate | `#64748B` | Secondary text |
| Light Slate | `#F8FAFC` | Backgrounds |
| Error Red | `#EF4444` | Errors, warnings |

### Gradient
```css
--rise-gradient: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
```

## 📝 Typography

### Fonts
| Font | Usage | Weights |
|------|--------|---------|
| Inter | Primary font | 400, 500, 600, 700 |
| Space Grotesk | Accents, numbers | 500, 700 |

### Hierarchy
| Element | Font | Size | Weight |
|---------|------|------|---------|
| H1 | Inter | 2rem | 700 |
| H2 | Inter | 1.5rem | 600 |
| H3 | Inter | 1.25rem | 600 |
| Body | Inter | 1rem | 400 |
| Accent | Space Grotesk | 1rem | 500 |

## 🔠 Voice & Tone

### Writing Principles
1. Clear & Concise
2. Encouraging & Supportive
3. Personal but Professional
4. Growth-Oriented
5. Gamer-Friendly

### Tone Examples
| Context | Example |
|---------|----------|
| Success | "Level up! You're making incredible progress!" |
| Challenge | "Ready to rise to the challenge?" |
| Setback | "Every master was once a beginner. Try again!" |
| Achievement | "Achievement unlocked! Your journey continues!" |

## 🎮 UI Components

### Buttons
```css
/* Primary Button */
.rise-button-primary {
  background: var(--rise-gradient);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
}

/* Secondary Button */
.rise-button-secondary {
  border: 2px solid var(--rise-primary);
  color: var(--rise-primary);
}
```

### Cards
```css
.rise-card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}
```

### Progress Indicators
```css
/* Bar */
.rise-progress-bar {
  background: var(--rise-gradient);
  border-radius: 9999px;
  height: 0.5rem;
}

/* Ring */
.rise-progress-ring {
  stroke: var(--rise-primary);
  stroke-linecap: round;
}
```

## ✨ Animations

### Transitions
| Element | Duration | Easing |
|---------|----------|---------|
| Buttons | 200ms | ease-in-out |
| Cards | 300ms | ease-out |
| Progress | 500ms | ease-in-out |

### Micro-interactions
```css
/* Hover Effects */
.rise-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2);
}

/* Achievement Unlock */
@keyframes unlock-achievement {
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}
```

## 🖼️ Icons & Images

### Icon Style
- Line weight: 2px
- Corner radius: 2px
- Style: Rounded
- Recommended set: Lucide icons

### Icon Colors
- Primary: Rise Purple
- Interactive: Current color
- Decorative: Slate

## 📱 Responsive Design

### Breakpoints
```css
--mobile: 640px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1280px;
```

### Spacing Scale
```css
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-6: 1.5rem;
--space-8: 2rem;
```

## 🏆 Achievement Visuals

### Rarity Levels
| Level | Border | Background |
|-------|---------|------------|
| Common | None | Light Gray |
| Rare | Silver | Light Blue |
| Epic | Gold | Purple |
| Legendary | Animated | Gradient |

### Badge Design
- Size: 48x48px
- Style: Flat with subtle shadow
- Animation: Unlock effect
- Border radius: 12px

## 📝 Documentation Style

### Code Comments
```typescript
// Good
// Calculate XP bonus based on streak length
function calculateStreakBonus(streakDays: number): number

// Bad
// Get XP
function getXP(): number
```

### Markdown Style
- Use emojis for section headers
- Include code blocks with syntax highlighting
- Use tables for structured data
- Include example usage where relevant

## 🔗 Related Pages
- [[Technical Documentation]]
- [[User Experience]]
- [[Content Library]]
- [[Feature Specifications]]

Would you like me to:
1. Continue with the next document?
2. Add more detail to any section?
3. Include more examples?
4. Add more visual guidelines?

Let me know your preference and I'll proceed accordingly.