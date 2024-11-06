import React, { useEffect, useState } from "react";

export const ThemeContext = React.createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleTheme = (currentTheme) => {
    document.body.classList.remove("light", "dark");

    if (currentTheme === "dark") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.body.classList.add("light");
    }
  };

  useEffect(() => {
    try {
      const currentTheme = localStorage.getItem("theme");
      handleTheme(currentTheme);
    } catch (error) {
      handleTheme("light");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
