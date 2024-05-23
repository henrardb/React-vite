import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
    console.log(`In lightTheme: ${themeMode}`);
  };

  useEffect(() => {
    console.group(`In useEffect: ${themeMode}`);
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <ThemeButton />
      <Card />
    </ThemeProvider>
  );
}

export default App;
