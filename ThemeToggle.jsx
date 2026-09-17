import React from 'react';
import { useUi } from './UiContext.jsx';

export function ThemeToggle() {
  const { theme, setTheme } = useUi();
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      style={styles.button}
    >
      Theme: {theme}
    </button>
  );
}

const styles = {
  button: {
    marginTop: '0.75rem',
    marginRight: '0.5rem',
    padding: '0.7rem 1.15rem',
    border: '1px solid #334155',
    borderRadius: '999px',
    background: '#1e293b',
    color: '#f8fafc',
    font: 'inherit',
    fontSize: '0.95rem',
    cursor: 'pointer',
  },
};
