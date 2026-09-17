# Practice exercise 1 — Hello World toggle

The layout and styles are already there. The React wiring is missing. Fill the `TODO` comments so a button in a **child** component can change the heading in the **parent**.

This is **state** in `App` plus a **callback prop** on `ToggleButton`. That is also called **lifting state up**. Read [how-state-works.md](how-state-works.md) if you want the concept first.

The app will not run until the HTML mount and `createRoot` lines are filled.

## Goal

Click the button once: heading becomes **Hello Hello**.  
Click again: heading becomes **Hello World**.

The button does **not** store the heading. `App` does.

## How to run

```bash
npm install
npm run dev
```

Open http://localhost:5173 after you finish the `index.html` tasks.

## Files you will edit

| File | What you change |
| --- | --- |
| `index.html` | Tasks 1 and 2 |
| `App.jsx` | Tasks 3–6 |
| `ToggleButton.jsx` | Tasks 7–10 |

Do not change the `styles` objects. Leave `package.json` and Vite config alone.

## Task 1 — mount point

**File:** `index.html` (first TODO in `<body>`).

React needs an empty element to attach to. Add:

```html
<div id="root"></div>
```

**Hint:** The id must be `root`. You will look it up in task 6 with `getElementById('root')`.

## Task 2 — load the app

**File:** `index.html` (second TODO).

Load `App.jsx` as an ES module:

```html
<script type="module" src="/App.jsx"></script>
```

**Hint:** `type="module"` is required so `import` in `App.jsx` works. The `/` means “from the project root” (Vite).

## Task 3 — state in App

**File:** `App.jsx`, inside `function App` (look for `TODO: Create state`).

`useState` is already imported. Create state that starts as `false`:

- value name: `excited`
- setter name: `setExcited`

**Hint:**

```js
const [excited, setExcited] = useState(false);
```

`excited` is the data. `setExcited` is the only way to change it. When it changes, React re-renders `App`.

## Task 4 — heading from state

**File:** `App.jsx`, inside the `<h1>` (JSX TODO).

Show **Hello Hello** when `excited` is `true`, otherwise **Hello World**.

**Hint:** JSX can hold a JS expression in `{ ... }`:

```js
{excited ? 'Hello Hello' : 'Hello World'}
```

The child must not write this text itself. The heading reads parent state.

## Task 5 — props into ToggleButton

**File:** `App.jsx`, on `<ToggleButton />`.

Pass two props:

- `pressed={excited}` — data **down** (a copy of the state)
- `onToggle` — a **callback prop**: a function that flips state with `setExcited`

**Hint:**

```jsx
<ToggleButton
  pressed={excited}
  onToggle={() => setExcited((value) => !value)}
/>
```

`(value) => !value` means: take the current flag and invert it. Do not write `setExcited(!excited)` if you can use this form; it always uses the latest value.

## Task 6 — mount App

**File:** `App.jsx`, bottom of the file.

Attach `<App />` to the `root` element from task 1.

**Hint:** `createRoot` is already imported.

```js
createRoot(document.getElementById('root')).render(<App />);
```

If this line is missing, the browser stays blank even when HTML is correct.

## Task 7 — receive props

**File:** `ToggleButton.jsx`, the function parameters.

The child must **receive** `onToggle` and `pressed`. It does not create them.

**Hint:**

```js
export function ToggleButton({ onToggle, pressed }) {
```

This is destructuring. Same names as the props you passed in task 5.

## Task 8 — click calls the callback

**File:** `ToggleButton.jsx`, on the `<button>`.

When the user clicks, call `onToggle`. That runs the parent’s `setExcited`.

**Hint:**

```jsx
onClick={onToggle}
```

Do not call `setExcited` here. The button does not own that state.

## Task 9 — aria-pressed

**File:** same `<button>`.

Set `aria-pressed` to the `pressed` prop so the button’s pressed state matches `excited`.

**Hint:**

```jsx
aria-pressed={pressed}
```

## Task 10 — button label

**File:** inside the `<button>`.

If `pressed` is true, show **Show Hello World**. Otherwise show **Show Hello Hello**.

**Hint:**

```js
{pressed ? 'Show Hello World' : 'Show Hello Hello'}
```

The label is the *next* action, not the current heading.

## How you know you are done

1. The page loads (no blank screen).
2. First heading is **Hello World**.
3. One click → heading **Hello Hello**, button **Show Hello World**.
4. Second click → heading **Hello World**, button **Show Hello Hello**.
5. You did **not** put `useState` inside `ToggleButton`. State stays in `App`.

## Why this pattern

- **Props go down:** `pressed` and `onToggle`.
- **The child asks to update** by calling `onToggle`.
- React **re-renders** `App`. The `h1` changes because it reads `excited`.

That is the callback-prop pattern. Context is not needed: one parent, one child, one boolean.
