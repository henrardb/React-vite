import { createContext, useContext } from "react";

// Creation of the context with data (variable + 2 functions )
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// Make the context available for all components
export const ThemeProvider = ThemeContext.Provider;

// Provide ways of using the context
export default function useTheme() {
  return useContext(ThemeContext);
}
