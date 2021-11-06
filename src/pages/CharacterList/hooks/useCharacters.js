import { useQuery, gql } from '@apollo/client'
import debounce from 'just-debounce-it'
import { useCallback, useEffect, useState } from 'react'

// TODO move to the external file
const query = gql`query Characters($page: Int!, $name: String) {
  characters (page: $page, filter: { name: $name }){
    info {
      next
      prev
    },
    results {
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
  }
}`

export function useCharacters () {
  const { data, loading, refetch, error } = useQuery(query, { variables: { page: 1 }, notifyOnNetworkStatusChange: true })
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    setCharacters(data?.characters?.results ?? [])
  }, [data])

  useEffect(() => {
    if (error) {
      setCharacters([])
    }
  }, [error])

  function moveNext () {
    if (canMoveNext()) {
      refetch({ page: data.characters.info.next })
    }
  }

  function movePrev () {
    if (canMovePrev()) {
      refetch({ page: data.characters.info.prev })
    }
  }

  function canMoveNext () {
    return !loading && data?.characters?.info?.next !== null
  }

  function canMovePrev () {
    return !loading && data?.characters?.info?.prev !== null
  }

  const filter = useCallback(
    debounce(name => refetch({ name, page: 1 }), 500),
    []
  )

  return {
    characters,
    moveNext,
    movePrev,
    canMoveNext,
    canMovePrev,
    filter,
    loading
  }
}
