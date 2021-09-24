import { useContext, useEffect } from 'react'
import { CharactersContext } from '../../../context/CharactersContext'
import { getCharactersList } from '../services'

export function useCharacters () {
  const {
    page,
    filter,
    characters,
    setCharacters,
    setRequestInfo
  } = useContext(CharactersContext)

  useEffect(() => {
    getCharactersList(filter, page)
      .then(data => {
        setCharacters(data.results)
        setRequestInfo(data.info)
      }).catch(() => {
        setCharacters([])
        setRequestInfo()
      })
  }, [page, filter])

  return {
    characters
  }
}
