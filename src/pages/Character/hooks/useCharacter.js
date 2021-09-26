import { useContext, useEffect, useState } from 'react'
import { CharactersContext } from '@/context/CharactersContext'
import { getCharacter } from '../services'
import { useLocation } from 'wouter'

export function useCharacter (id) {
  const [loading, setLoading] = useState(false)
  const [character, setCharacter] = useState()
  const [, setLocation] = useLocation()
  const { characters } = useContext(CharactersContext)

  useEffect(() => {
    if (!id) {
      return
    }

    const characterInState = characters.find(char => char.id === Number(id))
    if (characterInState) {
      setCharacter(characterInState)
    } else {
      setLoading(true)
      getCharacter(id)
        .then(setCharacter)
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
