import React, { createContext, useContext, useState } from 'react';

const UiContext = createContext(null);

export function UiProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  // TODO 1: Add language state with useState.
  // Default to 'en'. Name the value `language` and the setter `setLanguage`.

  const value = {
    theme,
    setTheme,
    // TODO 2: Add `language` and `setLanguage` to this value object (next to theme).
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export function useUi() {
  const ui = useContext(UiContext);
  if (!ui) {
    throw new Error('useUi must be used inside UiProvider');
  }
  return ui;
}
