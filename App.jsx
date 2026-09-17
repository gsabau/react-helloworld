import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ToggleButton } from './ToggleButton.jsx';
import { UiProvider, useUi } from './UiContext.jsx';
import { ThemeToggle } from './ThemeToggle.jsx';
import { LanguageToggle } from './LanguageToggle.jsx';
import { StatusLine } from './StatusLine.jsx';

function App() {
  return (
    <UiProvider>
      <Shell />
    </UiProvider>
  );
}

function Shell() {
  const [excited, setExcited] = useState(false);
  const { theme } = useUi();
  const palette = theme === 'light' ? palettes.light : palettes.dark;

  return (
    <main style={{ ...styles.main, ...palette }}>
      <div style={styles.stack}>
        <h1 style={styles.heading}>{excited ? 'Hello Hello' : 'Hello World'}</h1>
        <p style={{ ...styles.sub, color: palette.muted }}>
          Smallest React app with Vite
        </p>
        <ToggleButton
          pressed={excited}
          onToggle={() => setExcited((value) => !value)}
        />
        <Page />
      </div>
    </main>
  );
}

function Page() {
  return (
    <div>
      <StatusLine />
      <ThemeToggle />
      <LanguageToggle />
    </div>
  );
}

const palettes = {
  dark: {
    background: '#0f172a',
    color: '#f8fafc',
    muted: '#94a3b8',
  },
  light: {
    background: '#f1f5f9',
    color: '#0f172a',
    muted: '#475569',
  },
};

const styles = {
  main: {
    minHeight: '100vh',
    margin: 0,
    display: 'grid',
    placeItems: 'center',
    fontFamily:
      'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  },
  stack: {
    textAlign: 'center',
  },
  heading: {
    margin: 0,
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    letterSpacing: '-0.04em',
  },
  sub: {
    margin: '0.75rem 0 0',
    fontSize: '1.05rem',
  },
};

document.body.style.margin = '0';
createRoot(document.getElementById('root')).render(<App />);
