import { ThemeContext } from "./ThemeContext";
import { useState, useEffect } from "react";

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";

    return matchMedia("(prefers-color-scheme:dark)").matches;
  });

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  const toggleTheme = () => setDarkMode((mode) => !mode);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
