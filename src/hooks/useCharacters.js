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
    setLoading(true)
    getCharactersList()
      .then(response => {
        setCharactersRequestInfo(response.info)
        setCharacters(response.results)
      })
      .finally(() => setLoading(false))
  }, [])

  function moveNext () {
    getCharactersList(charactersRequestInfo.next)
      .then(response => {
        setCharactersRequestInfo(response.info)
        setCharacters(response.results)
      })
      .finally(() => setLoading(false))
  }

  function movePrev () {
    getCharactersList(charactersRequestInfo.prev)
      .then(response => {
        setCharactersRequestInfo(response.info)
        setCharacters(response.results)
      })
      .finally(() => setLoading(false))
  }

  function findCharacter(name){
    getCharactersList(null,name)
      .then(response => {
        setCharactersRequestInfo(response.info)
        setCharacters(response.results)
      })
      .finally(() => setLoading(false))
  }

  return {
    characters,
    loading,
    moveNext,
    movePrev,
    canMoveNext: charactersRequestInfo.next !== null,
    canMovePrev: charactersRequestInfo.prev !== null,
    findCharacter
  }
}
