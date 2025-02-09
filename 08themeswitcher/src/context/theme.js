import { createContext, useContext } from "react";

// Creating a Theme Context with default values
export const ThemeContext = createContext({
    themeMode: "light",  // Default theme mode
    darkTheme: () => { }, // Function placeholder for setting dark theme
    lightTheme: () => { }, // Function placeholder for setting light theme
})

// Exporting Provider
export const ThemeProvider = ThemeContext.Provider

// Custom hook to use Theme Context
export default function useTheme() {
    return useContext(ThemeContext);
}
