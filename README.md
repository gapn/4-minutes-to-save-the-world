# 4 Minutes to Save the World 🎮

**Game Jam:** Tiny but Mighty (FreeCodeCamp, August 2025)
**Theme:** Small but impactful and meaningful

---

## Concept (PROPOSED)

Player must run through 3 labyrinths in 4 minutes.

- Timer starts at 4:00.
- Only reaching checkpoints in time adds bonus seconds (max 5:00 total).
- Some dead ends contain meaningful messages the player can save.

---

## Controls

- **Arrow Keys** → Move the player

---

## Features (so far)

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
- ⏳ Next: Thematic backgrounds
