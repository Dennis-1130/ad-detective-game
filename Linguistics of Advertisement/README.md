# Ad Detective Journey: Stop the Press!
*Developing Teenagers’ Advertising Literacy through Applied Linguistics*

An interactive web-based gamification module for **Class 2 (Gamify / Read & Repair)** of a four-class English educational package (**Teach → Gamify & Repair → Create → Present**), designed for secondary school students aged **13–17 (Forms 1–6)** with mixed English proficiency.

---

## Pedagogical & Linguistic Design

Rather than a single static quiz, the game is structured as a **three-stop city journey** with Riley (a student reader). Each chapter pairs a real-world teenage retail setting with a distinct **branch of English linguistics**, progressing through a consistent four-step loop (**Decode → Match → Repair → Create**):

| Chapter & Setting | Linguistic Branch | Core Concepts | Original Ad & Targets | Chapter-Specific Mechanic |
| :--- | :--- | :--- | :--- | :--- |
| **Ch 1: Ink & Paper**<br>*(Stationery Shop)* | **Pragmatics** | Implicature & Hedging | *“Get **up to** 100% better grades! **Virtually** effortless study notes.”* | **Decoy Traps:** Normal words (*“better”*, *“study”*) are clickable decoys that penalize Reader Trust if misidentified. |
| **Ch 2: Sizzle Diner**<br>*(Fast-Food Restaurant)* | **Phonetics** | Sound Symbolism & Alliteration (`/k/`, `/p/`, `/s/`) | *“**Crispy, Crunchy**, **Sizzling** **Pure Perfection** — served hot.”* | **Audio & Sound Filter Toggle:** Uses Web Speech API to read plosives/sibilants aloud, plus a **Strip the Sound Filter** button revealing plain ingredients. |
| **Ch 3: Neon Kicks**<br>*(Sneaker Store)* | **Syntax** | Agentless Passive & Imperatives | *“**PROVEN** to boost speed! **ACT NOW** — **DON’T miss out**! Available in sizes 5–12.”* | **Countdown Defusal:** A 15-second fake flash-sale timer creates urgency until the player challenges the agentless passive (*“Proven by whom?”*). |

---

## Core Gameplay Loop (Per Chapter)

1. **Chapter Story Modal:** Introduces the setting, linguistic focus, and mission objective, while dynamically switching the CSS theme (`data-chapter="1|2|3"`).
2. **Step 1 · Decode:** Students identify manipulative linguistic phrases in the ad while avoiding normal decoy words. Mistakes trigger screen shake, synthesized error audio, and a **Reader Trust (%)** penalty.
3. **Step 2 · Match:** Students inspect the verified **Case File** and match the ad’s claim to its underlying linguistic mechanism.
4. **Step 3 · Repair:** Students select an honest, clear headline from three candidates and run **Publishing Checks** (*Backed by real facts* + *Clear & honest appeal*), followed by a **Before / After** comparison.
5. **Step 4 · Create:** Students write their own original headline using only verified facts. A built-in lexical filter catches banned manipulative trigger words from that chapter.
6. **Final Detective Report:** Summarizes performance across all three linguistic branches and awards a detective rank based on final **Reader Trust %**.

---

## Files & Architecture

| File | Purpose |
| :--- | :--- |
| `index.html` | Semantic page structure, accessible SVG character rig, journey navigation bar, and chapter modal |
| `styles.css` | Neo-brutalist editorial styling, 3 chapter color/pattern themes (`[data-chapter]`), responsive grid, and keyframe animations (`shake`, `slam`, `pop`) |
| `game.js` | Chapter dataset, finite-state step controller, Web Audio API procedural sound synthesizer, Web Speech TTS trigger, and lexical validation |
| `.nojekyll` | Ensures GitHub Pages serves static files directly without Jekyll processing |

Zero external frameworks, build tools, backend servers, CDNs, or external audio/image assets. All paths are relative.

---

## Run Offline & Deploy

### Run Offline
Double-click `index.html` to open directly in any modern browser over `file://` with no internet connection required.

### Deploy to GitHub Pages
1. Push `index.html`, `styles.css`, `game.js`, `README.md`, and `.nojekyll` to the root of the `main` branch.
2. Go to **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Select **Branch: `main`**, folder **`/ (root)`**, and click **Save**.
4. Access the live app at `https://<username>.github.io/<repository>/`.

---

## Classroom & Presentation Flow (~3 Minutes)

The top **Journey Navigation Bar** (`✏️ Ch1 · Pragmatics ➔ 🍔 Ch2 · Phonetics ➔ 👟 Ch3 · Syntax`) allows instant jumping between chapters during live teaching or presentations:

- **Chapter 1 (~1 min — Full Playthrough):** Enter *Ink & Paper Stationery*. Intentionally click a decoy word (*“better”*) to demonstrate the Trust penalty and shake feedback, then decode *“up to”* and *“Virtually”*, match Pragmatic Hedging, and publish the repaired headline.
- **Chapter 2 (~1 min 20 sec — Full Playthrough):** Enter *Sizzle Diner*. Click **🔊 Hear the Sound** and **🔇 Strip the Sound Filter** to demonstrate phonetic contrast, decode the three sound triggers, repair the menu copy, and test the **Create** input (optionally testing the banned-word filter with *“crispy”*).
- **Chapter 3 (~30 sec — Quick Preview):** Jump to *Neon Kicks* to showcase the dark neon theme and live **15-second countdown timer**, demonstrating how decoding *“PROVEN”* (agentless passive) freezes artificial urgency.

---

## Privacy

All student text and game state remain strictly in browser tab memory (`state` object). Nothing is stored in `localStorage`, cookies, or external servers. Refreshing or clicking **Reset / Restart Journey** clears all data.

---

## Manual Test Checklist

**Navigation & Flow**
- [ ] Chapter story modal opens at the start of each chapter and applies the matching visual theme (`1`: blueprint grid, `2`: diner stripes, `3`: neon dark).
- [ ] Top journey pills (`Ch1`, `Ch2`, `Ch3`) allow direct jumping between chapters and clean up active timers/speech synthesis.
- [ ] Full loop works in order: **Decode → Match → Repair → Before/After → Create → Final Report**.

**Interactive Mechanics & Feedback**
- [ ] Clicking decoy words deducts 10% Reader Trust, shakes the screen, and displays a specific hint.
- [ ] Chapter 2 **Hear the Sound** highlights target phrases and triggers speech synthesis; **Strip the Sound Filter** toggles between the flashy ad and plain ingredients.
- [ ] Chapter 3 countdown timer ticks down from 15s and freezes immediately once all three syntactic triggers are decoded.
- [ ] Web Audio API sound effects play on clue discovery, defusal, error, and publishing without external audio files.

**Create & Validation**
- [ ] Submitting an empty headline is blocked; entering banned manipulative words from the active chapter triggers an editor warning.
- [ ] Safe plain-text rendering (`textContent` / `createTextNode`) prevents HTML injection in custom headlines.

**Accessibility & Responsive Layout**
- [ ] All interactive controls are reachable via keyboard (`Tab`, `Enter`, `Space`) with visible focus outlines.
- [ ] Screen reader announcements update via `aria-live="polite"`.
- [ ] Layout stacks cleanly on mobile viewports (`< 820px`) and scales legibly on classroom projectors (`1280×720+`).