"use client";

import React, { useState, useEffect } from "react";

const ThemeToggleButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  return (
    <button
      onClick={() => setIsDarkTheme(!isDarkTheme)}
      className="w-20 h-20 fixed bottom-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-lg"
    >
      {isDarkTheme ? (
        <img src="/dark-mode.png" />
      ) : (
        <img src="/dark-mode.png" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
