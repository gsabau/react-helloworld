# Practice exercise 2 — add a Context value

Theme already works through **Context**. Your job is to add **one more value** to the same context: `language` (`en` / `de`).

Do not pass `language` through `Page` as a prop. That is the point of this exercise.

## What already works

- **Hello World toggle** — callback props (`pressed`, `onToggle`). That is exercise-1 style. Leave it.
- **Theme** — `UiProvider` holds `theme` / `setTheme`. `ThemeToggle` and `StatusLine` read it with `useUi()`. The page background follows the theme.
- **`Page`** does not receive a `theme` prop. Nested children still see the theme.

Run the app:

```bash
npm install
npm run dev
```

Open http://localhost:5173. Click **Theme: dark**. The background and the status line should change. The language button still says `Language (exercise)` until you finish the tasks.

## Files you will edit

| File | What you change |
| --- | --- |
| `UiContext.jsx` | Tasks 1 and 2 |
| `StatusLine.jsx` | Task 3 |
| `LanguageToggle.jsx` | Task 4 |

You should not need to change `App.jsx`, `Page`, `ThemeToggle.jsx`, or `ToggleButton.jsx`.

Copy the **theme** pattern. `language` is the same idea, second field.

## Task 1 — language state

**File:** `UiContext.jsx`, inside `UiProvider` (look for `TODO 1`).

Create state with `useState`, default `'en'`.

- value name: `language`
- setter name: `setLanguage`

**Hint:** You already have this for theme:

```js
const [theme, setTheme] = useState('dark');
```

Do the same for language. Start at `'en'`.

## Task 2 — put it on the context value

**File:** `UiContext.jsx`, the `value` object (look for `TODO 2`).

Anything in that object is what `useUi()` returns. Theme is already there. Add `language` and `setLanguage` next to `theme` and `setTheme`.

**Hint:**

```js
const value = {
  theme,
  setTheme,
  // add the two language fields here
};
```

If you skip this step, later components cannot read `language` even if state exists.

## Task 3 — show language in StatusLine

**File:** `StatusLine.jsx` (look for `TODO 3`).

`StatusLine` already calls `useUi()` and takes `theme`. Also take `language` from the **same** hook. Show it in the paragraph, for example:

`Language from context: {language}`

**Hints:**

- No new props. Do not add `language={...}` on `Page` or `StatusLine`.
- Destructure both fields: `const { theme, language } = useUi();`
- Until task 2 is done, `language` will be `undefined`.

## Task 4 — language button

**File:** `LanguageToggle.jsx` (look for `TODO 4`).

Make this button work like `ThemeToggle`, but for language.

1. Import `useUi` from `./UiContext.jsx`.
2. Call `const { language, setLanguage } = useUi();`
3. On click, flip `'en'` ↔ `'de'` with `setLanguage`.
4. Show the current language on the button, e.g. `Language: {language}`.

**Hint:** `ThemeToggle.jsx` is the template:

```js
const next = theme === 'dark' ? 'light' : 'dark';
onClick={() => setTheme(next)}
```

Same idea: if language is `'en'`, next is `'de'`, otherwise `'en'`.

## How you know you are done

1. Theme still toggles (do not break it).
2. Hello World still toggles.
3. Status line shows `Language from context: en` (then `de` after a click).
4. The language button shows `Language: en` / `Language: de`.
5. `Page` still has **no** `language` prop.

## Why Context here

Theme and language are UI-wide. Many nested components need them. Context avoids passing props through `Page`.

The heading toggle stays a **callback prop** because only `App`/`Shell` and `ToggleButton` care about `excited`. That is the smaller pattern.

Secrets (API keys, auth tokens) do **not** belong in Context. Language and theme do.
