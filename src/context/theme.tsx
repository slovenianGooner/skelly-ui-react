import { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'

export type Theme = 'light' | 'dark'

type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

type ThemeProviderProps = {
    children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [theme, setSelectedTheme] = useState<Theme>(localStorage.getItem('theme') as Theme || 'light')

    const toggleTheme = () => {
        setSelectedTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        console.log(theme)
        localStorage.setItem("theme", theme)
        document.body.classList.remove("dark", "light")
        document.body.classList.add("h-full", theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext) as ThemeContextType
    if (context === undefined) throw new Error('useTheme must be used within ThemeProvider')
    return context
}
