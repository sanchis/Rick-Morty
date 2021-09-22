import { useContext, useEffect, useState } from 'react'
import { CharactersContext } from '../context/CharactersContext'
import { getCharactersList } from '../services/rick-morty'

export function useCharacters () {
  const [loading, setLoading] = useState(false)
  const {
    characters, setCharacters,
    charactersRequestInfo,
    setCharactersRequestInfo
  } = useContext(CharactersContext)

  useEffect(() => {
    getCharactersPromise()
  }, [])

  function getCharactersPromise (url, name) {
    setLoading(true)
    getCharactersList(url, name)
      .then(response => {
        setCharactersRequestInfo(response.info)
        setCharacters(response.results)
      })
      .catch(() => {
        setCharactersRequestInfo(null)
        setCharacters([])
      })
      .finally(() => setLoading(false))
  }

  function moveNext () {
    getCharactersPromise(charactersRequestInfo.next)
  }

  function movePrev () {
    getCharactersPromise(charactersRequestInfo.prev)
  }

  function findCharacter (name) {
    getCharactersPromise(null, name)
  }

  return {
    characters,
    loading,
    moveNext,
    movePrev,
    canMoveNext: charactersRequestInfo?.next !== null && !loading,
    canMovePrev: charactersRequestInfo?.prev !== null && !loading,
    findCharacter
  }
}
