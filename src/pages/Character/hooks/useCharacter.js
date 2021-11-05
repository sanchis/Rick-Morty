import { useEffect, useState } from 'react'
import { getCharacter } from '../services'
import { useLocation } from 'wouter'

export function useCharacter (id) {
  const [loading, setLoading] = useState(true)
  const [character, setCharacter] = useState()
  const [, setLocation] = useLocation()

  useEffect(() => {
    setLoading(true)
    getCharacter(id)
      .then(setCharacter)
      .catch(() => setLocation('/error/404'))
      .finally(() => setLoading(false))
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
