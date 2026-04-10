"use client";

import { useEffect, useState } from "react";
import styles from "./theme-toggle.module.css";

type Theme = "light" | "dark";

const storageKey = "sob-theme";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(storageKey);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(getPreferredTheme());
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  const isDarkTheme = theme === "dark";

  return (
    <button
      className={styles.toggle}
      type="button"
      onClick={toggleTheme}
      aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
      title={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span aria-hidden="true">{isDarkTheme ? "☀️" : "🌙"}</span>
    </button>
  );
}
