import { useContext, useEffect, useState } from 'react'
import { CharactersContext } from '../../../context/CharactersContext'
import { getCharacter } from '../../../services/rick-morty'

export function useCharacter (id) {
  const [loading, setLoading] = useState(false)
  const [character, setCharacter] = useState()
  const {
    characters
  } = useContext(CharactersContext)

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
  }, [])

  return {
    character,
    loading
  }
}
