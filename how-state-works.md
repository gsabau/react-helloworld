# How App and ToggleButton share state

This is a first-lesson look at the button and the heading.

## It is state, plus a callback prop

The heading is driven by **state** in `App`: `excited`.

The child does not own that state. It gets two **props**:

- `pressed` — data (the current value of `excited`)
- `onToggle` — a **callback prop** (a function from the parent)

Yes: `onToggle` is the **callback prop** pattern. You would call it that. You would also say **lifting state up**, because the state lives in the parent, not in the button.

Those two names describe different pieces of the same design:

| Piece | Name |
| --- | --- |
| `excited` / `setExcited` in `App` | state |
| `onToggle` passed into `ToggleButton` | callback prop |
| Parent keeps the data; child only asks to change it | lifting state up |

It **is** state. The callback is how the child asks the parent to update that state.

- The **parent owns the data**.
- The parent **passes props down** (the value and the function).
- The child **calls the function** on click.
- The parent updates state. React **re-renders**. The `h1` changes because it reads that state.

```text
App  --pressed, onToggle-->  ToggleButton
App  <--onToggle() called--  ToggleButton
App  re-renders the h1
```

## State lives in App

```js
const [excited, setExcited] = useState(false);
```

| Name | Role |
| --- | --- |
| `excited` | The current value: `false` = Hello World, `true` = Hello Hello |
| `setExcited` | The only way to change that value |

`useState` means: “remember this value between renders.” When it changes, React draws the UI again.

The heading is **derived from state**. The child does not store “Hello Hello” as its own truth:

```js
<h1>{excited ? 'Hello Hello' : 'Hello World'}</h1>
```

## The two props

`App` passes two parameters into `ToggleButton`:

| Prop | What it is |
| --- | --- |
| `pressed` | a copy of `excited`, so the button can show the right label and `aria-pressed` |
| `onToggle` | callback: `() => setExcited((value) => !value)` |

```js
<ToggleButton
  pressed={excited}
  onToggle={() => setExcited((value) => !value)}
/>
```

`ToggleButton` only uses those props. It does not keep its own copy of the heading.

## Click flow

1. You click the button.
2. The button’s `onClick` runs `onToggle`.
3. That runs `setExcited` and flips `false` ↔ `true`.
4. React re-renders `App`.
5. The `h1` and the button label both update from the new `excited`.

That loop is what feels **React-like**: the screen is a function of state. The child asks the parent to change state. It does not edit the DOM heading directly.

## When Context is a better fit

Use **callback props** when one parent talks to a nearby child (this app).

Use **Context** when many components, nested at different levels, need the same **UI-wide** value. Otherwise you would pass that value through every component in between, even ones that do not care about it. That is called prop drilling.

Context is still JavaScript in the browser. Anything you put there is visible on the page. **No secrets.**

This app does not need Context: one parent, one child, one boolean.

### Good, common examples

| What | Why it belongs in Context |
| --- | --- |
| **Language / locale** | Headers, buttons, and dates in many components. Normal for i18n. |
| **Theme** (light/dark) | Colors and layout all over the UI. |
| **Shopping cart** | Product ids, names, quantities in the header and the cart page. Shared UI state, not a credential. Fine in Context for a small shop. (A store library is optional if the cart updates very often.) |

Context may also hold **public user info** after login (`name`, `id`) — that is display data, not the password or token.

### Do not put in Context

| What | Why not |
| --- | --- |
| **API keys** | A secret key must stay on a server. Never in React. A public Stripe-style key belongs in env config, not Context. |
| **Auth tokens** (JWTs) | Tutorials often stash these in Context or `localStorage`. XSS can steal them. Usual practice: an **httpOnly cookie** set by the server. |

## Tiny Context example

Not used in this project. This is only to show the idea: a theme that a deep child can read without a `theme` prop on every layer.

```jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Flip theme
      </button>
      <Page />
    </ThemeContext.Provider>
  );
}

function Page() {
  return <Panel />;
}

function Panel() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}
```

`Page` never sees `theme`. `Panel` still gets it from context. That is the kind of tree where Context earns its keep.
