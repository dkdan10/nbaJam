# NBA Jam Multiplayer

An NBA Jam-inspired basketball game built with HTML5 Canvas and modern JavaScript. The project has two live versions: a static/local multiplayer build on GitHub Pages, and a full realtime online multiplayer build on Render using Express and Socket.IO.

## Live Demos

- **Online multiplayer demo:** https://nbajam-multiplayer.onrender.com
- **Static GitHub Pages demo:** https://dkdan10.github.io/nbaJam/
- **Realtime branch:** https://github.com/dkdan10/nbaJam/tree/multiplayer

## Versions

| Branch | Host | What it shows |
| --- | --- | --- |
| `master` | GitHub Pages | Static/local two-player Canvas game built with Vite |
| `multiplayer` | Render | Full realtime version with online matchmaking, Express, Socket.IO, and improved assets |

## Controls

Player 1:

- Move: Arrow keys
- Jump: Up arrow
- Shoot: `/`

Player 2:

- Move: `A` and `D`
- Jump: `W`
- Shoot: `Q`

## Tech Stack

Static `master` branch:

- HTML5 Canvas
- Vanilla JavaScript
- Vite
- Vitest
- GitHub Pages

Realtime `multiplayer` branch:

- HTML5 Canvas
- Vanilla JavaScript
- Vite
- Express
- Socket.IO
- Vitest
- Render

## Setup

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Run tests:

```sh
npm test
```

Build for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Project Structure

- `src/index.js` starts the static game once the canvas is available.
- `src/js/game.js` coordinates menu state, gameplay state, and the animation loop.
- `src/js/player.js` and `src/js/player2.js` handle player movement, jumping, possession, and shooting.
- `src/js/ball.js`, `src/js/hoop.js`, `src/js/court.js`, and `src/js/scoreboard.js` contain the core game objects.
- `src/js/menu_screens` contains the main menu and character select screens.

## Deployment

The `master` branch deploys to GitHub Pages with GitHub Actions. Pushes to `master` run tests, build the Vite app, and publish the generated `dist` artifact.

The `multiplayer` branch deploys to Render as a Node web service because it includes the Express and Socket.IO server required for realtime online play.
