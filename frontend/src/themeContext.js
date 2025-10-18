// src/ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  // Optional: Remember theme across refresh using localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setIsDark(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const themeStyles = {
    backgroundColor: isDark ? "#121212" : "#ffffff",
    color: isDark ? "#f8f9fa" : "#121212",
    minHeight: "100vh",
    transition: "all 0.1s ease"
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, themeStyles }}>
      <div style={themeStyles}>{children}</div>
    </ThemeContext.Provider>
  );
}
