import React from 'react';
import { useUi } from './UiContext.jsx';

export function StatusLine() {
  const { theme } = useUi();

  // TODO 3: Read `language` from useUi() (same hook, no new props).
  // Show it next to the theme, e.g. "Language from context: {language}".

  return (
    <p style={styles.line}>
      Theme from context: {theme}
    </p>
  );
}

const styles = {
  line: {
    margin: '1rem 0 0',
    fontSize: '1.05rem',
    opacity: 0.75,
  },
};
