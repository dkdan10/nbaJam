# NBA Jam Multiplayer

NBA Jam Multiplayer is a browser basketball game built with HTML5 Canvas, Express, and Socket.IO. Two players can open the game, choose Online mode, get paired by the server, select characters, and play a realtime one-on-one match.

Live Render URL: _add Render service URL after deployment_

## Tech Stack

- HTML5 Canvas
- Vanilla JavaScript modules
- Vite
- Express
- Socket.IO
- Vitest

## Local Setup

Install dependencies:

```bash
npm ci
```

Build the browser client:

```bash
npm run build
```

Start the Express and Socket.IO server:

```bash
npm start
```

Open:

```text
http://localhost:8080
```

Health check:

```text
http://localhost:8080/healthz
```

## Development

Run the Vite dev server:

```bash
npm run dev
```

For full realtime multiplayer testing, run the production-style flow with `npm run build` and `npm start`, then open two browser windows at `http://localhost:8080`.

## Controls

Online:

- Arrow Left / Arrow Right: move
- Arrow Up: jump
- Space: shoot, hold to shoot

Offline:

- Player 1: `a`, `d`, `w`, `q`
- Player 2: Arrow Left, Arrow Right, Arrow Up, `/`

Menus:

- Arrow Up / Arrow Down: navigate
- Enter: select or ready up

## Render Deployment

This branch deploys as a Render Web Service because realtime multiplayer requires a running Node server.

Recommended Render settings:

- Branch: `multiplayer`
- Build command: `npm ci && npm run build`
- Start command: `npm start`
- Health check path: `/healthz`

The included `render.yaml` captures the same settings for blueprint-based deployment.

## Manual Multiplayer Verification

1. Open the deployed URL in two browser windows or two devices.
2. Select Online in both clients.
3. Confirm both clients reach character select.
4. Change characters and confirm selection syncs.
5. Press Enter in both clients to ready up.
6. Confirm gameplay starts in both clients.
7. Move both players and confirm positions sync.
8. Shoot and score to confirm ball and score updates sync.
9. Close one browser and confirm the other client exits the match cleanly.

## Known Limitations

- Multiplayer state is stored in memory.
- The app is intended for a single Render instance.
- Multiple server instances would require sticky sessions and shared state.
- There are no accounts, matchmaking rooms, or persistent stats.
