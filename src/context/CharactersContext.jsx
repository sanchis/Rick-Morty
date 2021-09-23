import React, { useState } from 'react'

export const CharactersContext = React.createContext({})

export function CharactersContextProvider ({ children }) {
  const [characters, setCharacters] = useState([])
  const [requestInfo, setRequestInfo] = useState()
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('')
  return (
    <CharactersContext.Provider value={{
      filter,
      setFilter,
      page,
      setPage,
      characters,
      setCharacters,
      requestInfo,
      setRequestInfo
    }}
    >
      {children}
    </CharactersContext.Provider>
  )
}
