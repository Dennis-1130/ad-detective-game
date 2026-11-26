# Ad Detective Journey: Stop the Press!
*Developing Teenagers’ Advertising Literacy through Applied Linguistics*

🎮 **Live Demo:** [Play Ad Detective Journey](https://dennis-1130.github.io/ad-detective-game/)

An interactive web-based gamification module for **Lesson 2 (Gamified Classroom / Read & Repair)** of a four-class English educational package (**Teach → Gamify & Repair → Create → Present**), designed for secondary school students aged **13–17 (Forms 1–6)** with mixed English proficiency.

---

## Pedagogical & Linguistic Design

Building on the linguistic theory introduced in Lesson 1, this game immerses students in a **three-stop city journey** alongside classmate Riley. Each chapter pairs a relatable teenage retail setting with a distinct **branch of English linguistics**, progressing through a consistent four-step loop (**Spot / Decode → Name / Match → Fix / Repair → Create**):

| Chapter & Setting | Linguistic Branch | Core Concepts | Original Ad & Targets | Chapter-Specific Mechanic |
| :--- | :--- | :--- | :--- | :--- |
| **Ch 1: Ink & Paper**<br>*(Stationery Shop)* | **Pragmatics** | Implicature & Hedging | *“Get **up to** 100% better grades! **Virtually** effortless study notes.”* | **Decoy Traps:** Normal words (*“better”*, *“study”*) act as clickable decoys that penalize Reader Trust if misidentified. |
| **Ch 2: Sizzle Diner**<br>*(Fast-Food Restaurant)* | **Phonetics** | Sound Symbolism & Alliteration (`/k/`, `/p/`, `/s/`) | *“**Crispy, Crunchy**, **Sizzling** **Pure Perfection** — served hot.”* | **Audio & Sound Filter Toggle:** Uses smart English voice selection (Web Speech API) to read plosives/sibilants aloud, plus a **Strip Sound Filter** button revealing plain ingredients. |
| **Ch 3: Neon Kicks**<br>*(Sneaker Store)* | **Syntax** | Agentless Passive & Imperatives | *“**PROVEN** to boost speed! **ACT NOW** — **DON’T miss out**! Available in sizes 5–12.”* | **Countdown Defusal:** A 15-second fake flash-sale timer creates urgency until the player challenges the agentless passive (*“Proven by whom?”*). |

---

## Core Gameplay Loop (Per Chapter)

1. **Animated Title Cover & BGM:** Features a responsive animated cover page with a click-to-start hotspot and a procedural Web Audio API detective soundtrack (with a one-click `BGM: ON/OFF` toggle).
2. **Step 1 · Spot (Decode):** Students identify manipulative linguistic phrases in the ad while avoiding normal decoy words. Mistakes trigger screen shake, synthesized error audio, and a **Reader Trust (%)** penalty.
3. **Step 2 · Name (Match):** Students inspect the verified **Case File** and match the ad’s claim to its underlying linguistic mechanism.
4. **Step 3 · Fix (Repair):** Students select an honest, clear headline from three candidates and run **Publishing Checks** (*Backed by real facts* + *Clear & honest appeal*), followed by a **Before / After** comparison.
5. **Step 4 · Create:** Students write their own original headline using only verified facts. A built-in lexical filter catches banned manipulative trigger words from that chapter.
6. **Final Detective Report:** Summarizes performance across all three linguistic branches and awards a detective rank based on final **Reader Trust %**.

---

## Files & Architecture

| File | Purpose |
| :--- | :--- |
| `index.html` | Semantic page structure, animated start cover, accessible SVG character rig, journey navigation bar, and chapter modals |
| `styles.css` | Neo-brutalist editorial styling, cover breathing/motion effects, 3 chapter color/pattern themes (`[data-chapter]`), responsive grid, and keyframe animations (`shake`, `slam`, `pop`) |
| `game.js` | Chapter dataset, finite-state step controller, Web Audio API procedural BGM & SFX synthesizer, smart English Web Speech TTS selector, and lexical validation |
| `cover.png` | Custom illustrated cover artwork for the interactive title screen |
| `README.md` | Project overview, pedagogical framework, and presentation guide |

Zero external frameworks, build tools, backend servers, CDNs, or external audio files. All paths are relative.

---

## Run Offline & Deploy

### Run Offline
Double-click `index.html` to open directly in any modern browser (Chrome or Edge recommended for optimal English voice synthesis) over `file://` with no internet connection required.

### Deploy to GitHub Pages
1. Push `index.html`, `styles.css`, `game.js`, `cover.png`, and `README.md` to the root of the `main` branch.
2. Go to **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Select **Branch: `main`**, folder **`/ (root)`**, and click **Save**.
4. Access the live app at `https://dennis-1130.github.io/ad-detective-game/`.

---

## Classroom & Presentation Flow (~3 Minutes)

The top **Journey Navigation Bar** (`✏️ Ch1 · Pragmatics ➔ 🍔 Ch2 · Phonetics ➔ 👟 Ch3 · Syntax`) allows instant jumping between chapters during live teaching or presentations:

- **Cover & Intro (~20 sec):** Launch from the animated title cover (`Start Game ▶`), showcase the custom detective BGM, and mute BGM for clear live narration.
- **Chapter 1 (~1 min — Full Playthrough):** Enter *Ink & Paper Stationery*. Intentionally click a decoy word (*“better”*) to demonstrate the Trust penalty and shake feedback, decode *“up to”* and *“Virtually”*, match **Pragmatic Hedging**, publish the honest rewrite, and test the **Create** input (triggering the banned-word warning with *“100% guaranteed”*).
- **Chapter 2 (~1 min — Full Playthrough):** Enter *Sizzle Diner*. Click **🔊 Hear Sound** and **🔇 Strip Sound Filter** to demonstrate phonetic contrast, decode the three sound triggers (**Alliteration & Sound Symbolism**), and publish the repaired menu copy.
- **Chapter 3 (~25 sec — Quick Preview):** Jump to *Neon Kicks* to showcase the dark neon theme and live **15-second countdown timer**, highlighting **Agentless Passives** (*“PROVEN”*) and **Imperatives** (*“ACT NOW”*).

---

## Privacy

All student text and game state remain strictly in browser tab memory (`state` object). Nothing is stored in `localStorage`, cookies, or external servers. Refreshing or clicking **Reset / Restart Journey** clears all data.
