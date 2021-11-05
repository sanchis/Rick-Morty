import { useQuery, gql } from '@apollo/client'
import { useEffect } from 'react'
import { useLocation } from 'wouter'

// TODO move external file
const query = gql`query Character($id: ID!) {
  character(id:$id) {
    id
    name
    image
    status
    gender
    species
    location {
      name
    }
    origin {
      name
    }
    created
  }
}`

export function useCharacter (id) {
  const { loading, data, error } = useQuery(query, { variables: { id } })
  const [, setLocation] = useLocation()

  useEffect(() => {
    if (error) {
      console.error(error)
      setLocation('/error/404')
    }
  }, [error])

  function moveNextCharacter () {
    setLocation(`/character/${Number(id) + 1}`)
  }

  function movePrevCharacter () {
    setLocation(`/character/${Number(id) - 1 === 0 ? id : Number(id) - 1}`)
  }

  return {
    character: data?.character,
    loading,
    moveNextCharacter,
    movePrevCharacter
  }
}
