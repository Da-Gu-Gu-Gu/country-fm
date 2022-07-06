import { useState, useEffect, createContext } from "react";

const getInitialTheme = (_) => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  // If you want to use light theme as the default,
  // return "light" instead
  return "dark";
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  //dark so true
  const [theme, setTheme] = useState(getInitialTheme === "dark" ? true : false);

  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;

    root.classList.remove(theme ? "light" : "dark");
    root.classList.add(theme ? "dark" : "light");

    localStorage.setItem("color-theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(
    (_) => {
      rawSetTheme(theme);
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
