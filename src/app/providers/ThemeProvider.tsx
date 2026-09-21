import React, { useEffect, useState, type ReactNode } from 'react';
import type { ThemeMode } from '../../types/theme';
import { getStorageItem, setStorageItem } from '../../storage/localStorage';
import { STORAGE_KEYS } from '../../storage/keys';
import { ThemeContext } from './themeContext';

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() =>
    getStorageItem<ThemeMode>(STORAGE_KEYS.THEME, 'system')
  );

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const updateResolvedTheme = () => {
      let active: 'light' | 'dark' = 'light';
      if (theme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        active = prefersDark ? 'dark' : 'light';
      } else {
        active = theme;
      }

      setResolvedTheme(active);
      document.documentElement.setAttribute('data-theme', active);
    };

    updateResolvedTheme();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => updateResolvedTheme();
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [theme]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    setStorageItem(STORAGE_KEYS.THEME, newTheme);
  };

  const toggleTheme = () => {
    const nextTheme: ThemeMode = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

