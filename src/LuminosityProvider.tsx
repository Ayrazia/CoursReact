import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { LuminosityContext } from './LuminosityContext'

export function LuminosityProvider({ children }: { children: ReactNode }) {
    const [luminosity, setLuminosity] = useState<boolean>(() => {
        const storedTheme = localStorage.getItem('theme')

        if (storedTheme === 'dark') {
            return true
        }

        if (storedTheme === 'light') {
            return false
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        const theme = luminosity ? 'dark' : 'light'
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [luminosity])

    const value = useMemo(
        () => ({
            luminosity,
            setLuminosity,
            toggleLuminosity: () => setLuminosity((previous) => !previous),
        }),
        [luminosity],
    )

    return <LuminosityContext.Provider value={value}>{children}</LuminosityContext.Provider>
}

