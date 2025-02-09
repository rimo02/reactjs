import { createContext, useContext } from "react";


// context jab taiyaar ho kya kya value present hona chaiye
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}