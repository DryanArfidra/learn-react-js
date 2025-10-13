import React, { createContext, useContext, useReducer, useMemo } from 'react';

const TOGGLE_THEME = 'TOGGLE_THEME';

function themeReducer(state, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { theme: 'light' });

  const toggleTheme = () => dispatch({ type: TOGGLE_THEME });

  const value = useMemo(() => ({
    ...state,
    toggleTheme,
  }), [state]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}