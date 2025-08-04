# 4 Minutes to Save the World 🎮

**Game Jam:** Tiny but Mighty (FreeCodeCamp, August 2025)
**Theme:** Small but impactful and meaningful

---

## Concept

Player must run through 3 labyrinths in 4 minutes.

- Timer starts at 4:00.
- Only reaching checkpoints in time adds bonus seconds (max 5:00 total).
- Some dead ends contain meaningful messages the player can save.

---

## How to Play

Your goal is to navigate through three challenging mazes before the 4-minute timer expires. On each level, you can collect 5 educational messages to understand how to help the world. Look for checkpoints to gain extra time, but be quick — humanity is counting on you!

---

## Controls

- **Arrow Keys** → Move the player

---

## Key Features

- Tile-based map rendering from a 2D matrix
- Basic collision detection (walls)
- Smooth animated player movement
- Interactive tiles:
  - Messages (thematic hints)
  - Checkpoint (add time)
  - Finish (lock level, countdown to next level)
- Overlay for collected messages
- Status bar tracking checkpoint and collected messages
- Level progression
- Global countdown timer
- Full-screen intro screen to set the story
- Game legend explaining tile colors
- Thematic backgrounds for the page and for each level
- Asset preloader to ensure smooth loading
- Complete win/lose conditions with a universal restart option
- Fully centered and responsive UI layout

---

## Tech

- HTML `<canvas>` for maze & player
- CSS for layout + overlays
- JavaScript for core game logic

---

## Progress 🚀

- ✅ Initial skeleton (HTML, CSS, JS, README, .gitignore)
- ✅ Maze layout rendering on canvas
- ✅ Implement player movement with smooth animation
- ✅ Interactive tiles (messages, checkpoint, finish tile)
- ✅ Implement global timer, and level progression (3 maps)
- ✅ Implement thematic backgrounds and asset preloader
- ✅ Add full-screen intro and game legend
- ✅ Overhaul UI with a centered layout and consistent theme

## Future Ideas ⏳

- Add background music and sound effects (SFX) for movement and actions
- Add fade-in/fade-out transitions between levels
- Animate UI elements, like making the timer pulse when time is low
- Use a custom font for the UI to give it a unique look
- controls on screen (for mobile devices)
- bigger maze
