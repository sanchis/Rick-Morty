import Box from '@mui/material/Box'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export default function Card ({ children, ...props }) {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <Box
      {... props}
      sx={{
        backgroundColor: currentTheme.palette.background.default,
        border: `5px solid ${currentTheme.palette.primary.main}`
      }}
    >
      {children}
    </Box>
  )
}
