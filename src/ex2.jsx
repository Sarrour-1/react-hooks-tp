// ex2.jsx
import React, { useState, createContext, useContext } from 'react';

// Création du contexte
const ThemeContext = createContext();

// Provider qui gère le thème
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Composant qui consomme le contexte
function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Thème actuel : {theme}</p>
      <button onClick={toggleTheme}>Changer le thème</button>
    </div>
  );
}

// Composant exporté
function ThemeComponent() {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default ThemeComponent;
