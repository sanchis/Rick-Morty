import { useContext, useEffect, useState } from 'react'
import { CharactersContext } from '@/context/CharactersContext'
import { getCharacter } from '../services'
import { useLocation } from 'wouter'

export function useCharacter (id) {
  const [loading, setLoading] = useState(true)
  const [character, setCharacter] = useState()
  const [, setLocation] = useLocation()
  const { characters } = useContext(CharactersContext)

  useEffect(() => {
    const characterInState = characters.find(char => char.id === Number(id))

    // Check if the current character exist in context to prevent make a new request.
    if (characterInState) {
      setLoading(false)
      setCharacter(characterInState)
    } else {
      // if not exist in context make a new request to get the character
      setLoading(true)
      getCharacter(id)
        .then(setCharacter)
        .catch(() => setLocation('/error/404'))
        .finally(() => setLoading(false))
    }
  }, [id])

  function moveNextCharacter () {
    setLocation(`/character/${Number(id) + 1}`)
  }

  function movePrevCharacter () {
    setLocation(`/character/${Number(id) - 1 === 0 ? id : Number(id) - 1}`)
  }

  return {
    character,
    loading,
    moveNextCharacter,
    movePrevCharacter
  }
}
