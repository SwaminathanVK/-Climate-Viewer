// src/context/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const root = document.body;
    if (dark) {
      root.classList.add('bg-dark', 'text-light');
      root.classList.remove('bg-light', 'text-dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('bg-light', 'text-dark');
      root.classList.remove('bg-dark', 'text-light');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
