# टपरी गेम · Tapri Game (Production Hardened Build v1.4)

An authentic Indian tea stall (chai tapri) sorting puzzle web application and game, built with rich animations, procedural sound synthesis, progressive street tapri visual upgrades, customer orders, daily missions, and robust cloud/offline architecture.

---

## 🎮 How to Play

### 1. Instant Play (Browser / Canvas / Offline)
- Open `index.html` in any modern web browser or run it in Canvas.
- Click **"⚡ मेहमान बनकर खेलो (Play as Guest)"** to dive straight into Level 1, or enter your name and a 4-to-8 digit PIN to save personal progress.
- **Gameplay**:
  - Tap a tray to pick up the top item(s), then tap another tray to drop.
  - Items can only be moved onto matching items or into empty trays.
  - Complete trays with 4 of the same item to fulfill customer orders (Chai ☕, Samosa 🥟, Bun Maska 🍩, etc.).
  - Serve customers before their patience bar depletes to earn bonus tips (🪙)!
  - Replay any previously won levels from the level map to achieve full 3-star ratings!
  - Use earned coins in the **Shop (🛒)** to upgrade your tapri from a humble Thela cart into a vibrant Food Street!

---

## 🚢 Deployment to Antideploy

Tapri Game is fully pre-configured for instant zero-config deployment on [Antideploy](https://antideploy.com/):

### Method 1: Instant Upload (No Setup Needed)
1. Head over to [Antideploy](https://antideploy.com/) and sign in.
2. Select **New project → Upload**.
3. Drag and drop the `tapri-game-v1.3-secured.zip` file (or extracted folder).
4. Antideploy automatically recognizes `server.js` and `index.html`, runs `npm start`, provisions HTTPS, and serves the live app at `your-app.antideploy.app`.

### Method 2: From a Local Coding Agent (Claude Code / Cursor / Terminal)
In your local terminal or agent environment with outbound network access:
```bash
# Add Antideploy MCP server
claude mcp add antideploy -- npx -y antideploy-mcp@latest
```
Then ask:
> *"deploy this"*

Click **Approve** on the one-time browser link (`antideploy.com/activate?code=...`), and Antideploy packages, deploys, and outputs your live HTTPS link.

---

## 🚀 Deployment to Vercel

1. Connect a private **Vercel Blob** store to the project.
2. Set Environment Variables:
   - `APP_SECRET`: Long random secret (40+ characters).
   - `CHEAT_HASH`: SHA-256 hash of your cheat code.
3. Deploy via GitHub or `vercel --prod`.

---

## 🛡️ Security Hardening & Vibe-Coding Protections
- **Zero Plain-Text Credentials**: Client-side salted SHA-256 hashing for offline storage; scrypt password hashing for cloud API.
- **Hidden File & Source Code Protection**: Rules block `/.git`, `/.env`, and internal config endpoints with HTTP 403 Forbidden.
- **Anti-Account Takeover**: PIN resets require verified device ownership and a private secret recovery key.
- **Strict Schema Validation**: Validates all inputs against strict schemas rather than merely escaping.
- **Exponential Backoff**: Auth endpoints enforce progressive delays against brute-force attacks.
- **3D Spatial Worldwide Arena**: Olympic-style 3D podium and centralized global leaderboard powered by cloud database.
- **Universal Black Typography**: High-contrast, bold black text across all buttons, inputs, and gameplay controls.
- **Custom Character Wardrobe & Shop (v1.8)**: Added complete custom character purchasing engine where players can unlock 11 unique characters (Chaiwala, Sharma ji, Chef Bholu, Havaldar, Chai Ninja, Tea King, etc.) using their earned coins and equip them. Re-labeled Worldwide section to 'लाइव रैंक' (Live Rank).
- **Anime Sharingan-to-Rinnegan Boot Loader (v2.0)**: Smooth eye-evolution loading screen inspired by Naruto Uchiha sharingan & rinnegan.
- **Next-Gen Floating Glass Capsule Dock (v2.1)**: Added mobile-native floating bottom navigation dock inspired by 10 next-gen UI designs, providing 1-tap glassmorphic access to Home, Shop, Characters, Live Rank, and Settings with tactile sound effects.
- **Background Freeze & Timer Pause System (v2.2)**: Opening Settings or modal dialogs instantly freezes the background (`blur(10px) brightness(0.65)`), locks scrolling, pauses all background CSS animations (`animation-play-state: paused`), disables dock clicks, and pauses active gameplay timers until closed.
- **Smart Audio Lifecycle & Background Auto-Mute (v2.3)**: Audio and music automatically halt immediately when the screen turns off, when switching apps/tabs, on incoming phone calls (`blur`/`visibilitychange`), or when closing the game (`pagehide`/`beforeunload`), resuming gracefully only when returning to the game.
- **Interactive Top-Layer Floating Dock (v2.4)**: When Settings or any modal opens, the background page remains completely frozen and blurred, while the bottom glass capsule dock stays elevated on top (`z-index: 120`), perfectly sharp, and interactive, enabling seamless 1-tap switching between Home, Shop, Characters, Live Rank, and Settings.
- **Universal Unified Color Palette (v2.5)**: Enforced 100% identical styling, typography, and contrast across all mobile devices regardless of device OS dark/light mode preferences.
- **Persistent Global Capsule Dock**: The floating bottom capsule navigation dock remains elevated and active across all views and modals, allowing instantaneous 1-tap switching between Leaderboard, Home, Settings, Shop, and Characters.
- **Level Progression Guarantee & High-Speed Engine (v2.6)**: Guaranteed fail-safe progression on level wins (zero 'try again' blockers). Halved move/fly animation latency from 420ms down to 210ms with smooth cubic-bezier physics, ensuring instant responsive puzzle gameplay.

### ⚡ Developer Secret Code & Infinity Level System
- **Developer Secret Code**: `shamsraj@123`
  - Enter in **Settings (⚙️) -> 🔑 सीक्रेट कोड (Secret Code)**.
  - Grants `+1000 Coins`, `Unlimited Hints (999)`, and the `⚡ पास (Skip)` button in all levels!
- **200 Levels + Infinite Levels (Level 201+)**:
  - Every level from Level 1 through 200 has been verified for 100% mathematical solvability with A* heuristic solver.
  - At Level 201+, the game automatically activates **Infinity Level Mode (♾️ इनफिनिटी चाय सम्राट)** with progressive Tier prestige badges and unbounded level scaling.
