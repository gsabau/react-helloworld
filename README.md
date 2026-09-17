# react-helloworld

Smallest Vite + React 19 "Hello World" app. A few files, no extra UI libraries.

## Stack / tools

| Tool | What it does here |
| --- | --- |
| **Node.js** | JavaScript runtime. It runs npm and Vite on your machine. |
| **npm** | Package manager that ships with Node. Reads `package.json` and installs libraries into `node_modules`. |
| **Vite** | Dev server, on-the-fly JSX transform, and hot reload. Also the production bundler (`vite build`) and local preview (`vite preview`). |
| **React** | UI library. You write components in JSX (`<h1>Hello World</h1>`). |
| **react-dom** | Browser renderer. `createRoot` mounts the React tree onto `#root`. |
| **@vitejs/plugin-react** | Vite plugin for React Fast Refresh and JSX handling. Loaded from `vite.config.js`. |
| **JavaScript (ES modules)** | `"type": "module"` in `package.json` so `import` / `export` work. `index.html` loads `App.jsx` as an ES module. |

VS Code is recommended for editing. Any editor works.

## Libraries

Versions come from `package.json`.

| Package | Version | Kind | Role |
| --- | --- | --- | --- |
| `react` | `^19.0.0` | runtime | Components and JSX |
| `react-dom` | `^19.0.0` | runtime | Renders into the DOM |
| `vite` | `^6.0.0` | dev | Dev server, transform, build, preview |
| `@vitejs/plugin-react` | `^4.3.4` | dev | Fast Refresh and JSX in Vite |

Runtime packages are needed in the browser. Dev packages are only needed while developing or building.

## Minimum versions

- **Node.js 18 or higher** — required by Vite 6 and React 19
- **npm** — whatever version ships with your Node install

Check:

```bash
node -v
npm -v
```

`node -v` must print `v18.0.0` or newer. If it is lower, install a current Node from [nodejs.org](https://nodejs.org/).

## Mandatory steps

Do these in order. The app will not run if you skip install or the dev server.

1. **Install Node.js 18+** (includes npm). Confirm with `node -v`.
2. **Open this project folder** in a terminal (VS Code: File → Open Folder, then `Ctrl + ~`).
3. **Install libraries:**

   ```bash
   npm install
   ```

4. **Start the dev server:**

   ```bash
   npm run dev
   ```

5. **Open [http://localhost:5173](http://localhost:5173)** and confirm **Hello World**.

## Commands

| Command | Required to view the app? | What it does |
| --- | --- | --- |
| `npm install` | Yes (once, or after `package.json` changes) | Installs libraries from `package.json` |
| `npm run dev` | Yes | Starts Vite at http://localhost:5173 with hot reload |
| `npm run build` | No | Production build into `dist/` |
| `npm run preview` | No | Serves the production build locally |

## File map

```text
react-helloworld/
├── package.json      # scripts and dependencies
├── index.html        # page shell and #root mount point
├── App.jsx           # Hello World component + render
├── vite.config.js    # enables the React plugin
├── .gitignore        # ignores node_modules and build output
├── README.md         # this how-to
├── how-state-works.md # how App and ToggleButton share state
└── LICENSE           # MIT
```

`index.html` loads `/App.jsx` as an ES module. Vite compiles that JSX on the fly.

## How it works

1. Vite serves `index.html`.
2. The script tag loads `App.jsx`.
3. `App` returns an `<h1>Hello World</h1>`.
4. `createRoot(...).render(<App />)` mounts it on `#root`.

Edit `App.jsx` and save. Vite hot-reloads the page without a full refresh.

How `App` and `ToggleButton` share state (props down, callback up): see [how-state-works.md](how-state-works.md).

## License

MIT. See [LICENSE](LICENSE).
