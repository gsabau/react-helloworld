import React from 'react';

export function LanguageToggle() {
  // TODO 4: Import and call useUi().
  // Flip language between 'en' and 'de' with setLanguage when this button is clicked.
  // Show the current language on the button, like ThemeToggle does for theme.

  return (
    <button type="button" style={styles.button}>
      Language (exercise)
    </button>
  );
}

const styles = {
  button: {
    marginTop: '0.75rem',
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
