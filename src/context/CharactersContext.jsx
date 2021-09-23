import React, { useState } from 'react'

export const CharactersContext = React.createContext({})

export function CharactersContextProvider ({ children }) {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [charactersRequestInfo, setCharactersRequestInfo] = useState()

  return (
    <CharactersContext.Provider value={{
      characters,
      setCharacters,
      charactersRequestInfo,
      setCharactersRequestInfo,
      loading,
      setLoading
    }}
    >
      {children}
    </CharactersContext.Provider>
  )
}
