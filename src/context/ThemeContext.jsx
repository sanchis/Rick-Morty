import { GlobalStyles, ThemeProvider, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import themes from '../themes'
import bg from '@/../assets/bg.jpg'
import bgDark from '@/../assets/bg-dark.jpg'

export const ThemeContext = React.createContext({})

export function ThemeContextProvider ({ children }) {
  const [themeMode, setThemeMode] = useState('light')
  const [currentTheme, setCurrentTheme] = useState(themes(themeMode))
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
    const currentThemeMode = prefersDarkMode ? 'dark' : 'light'
    setThemeMode(currentThemeMode)
    setCurrentTheme(themes(currentThemeMode))
  }, [prefersDarkMode])

  const bgImage = (mode) => {
    return {
      body: {
        background: mode === 'light'
          ? `white url("${bg}") repeat fixed center`
          : `white url("${bgDark}") repeat fixed center;`
      }
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        currentTheme
      }}
    >
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles styles={bgImage(themeMode)} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
