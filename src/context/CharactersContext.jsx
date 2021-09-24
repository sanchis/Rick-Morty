import React, { useEffect, useState } from 'react'
import { getCharactersList } from '@/services/rick-morty'

export const CharactersContext = React.createContext({})

export function CharactersContextProvider ({ children }) {
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState('')
  const [loading, setLoading] = useState(false)
  const [charactersRequestInfo, setCharactersRequestInfo] = useState()

  useEffect(() => {
    if (loading) {
      return
    }
    setLoading(true)
    getCharactersList(filter, currentPage)
      .then(response => {
        setCharactersRequestInfo(response.info)
        setCharacters(response.results)
      })
      .catch(() => {
        setCharactersRequestInfo(null)
        setCharacters([])
      })
      .finally(() => setLoading(false))
    console.log(filter, currentPage)
  }, [filter, currentPage])

  return (
    <CharactersContext.Provider value={{
      characters,
      filter,
      setFilter,
      charactersRequestInfo,
      loading,
      setCurrentPage
    }}
    >
      {children}
    </CharactersContext.Provider>
  )
}
