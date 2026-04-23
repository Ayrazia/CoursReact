import { createContext, useContext } from 'react'

export type LuminosityContextType = {
    luminosity: boolean
    setLuminosity: (luminosity: boolean) => void
    toggleLuminosity: () => void
}

const LuminosityContext = createContext<LuminosityContextType | undefined>(undefined)


export function useLuminosity() {
    const context = useContext(LuminosityContext)

    if (!context) {
        throw new Error('Pas de contexte')
    }

    return context
}

export { LuminosityContext }

