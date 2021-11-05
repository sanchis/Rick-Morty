import { useQuery, gql } from '@apollo/client'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'

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
  const { data, loading, refetch } = useQuery(query, { variables: { page: 0 } })

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
    return data?.characters?.info?.next !== null
  }

  function canMovePrev () {
    return data?.characters?.info?.prev !== null
  }

  const filter = useCallback(
    debounce(name => refetch({ name, page: 0 }), 500),
    []
  )

  return {
    characters: data?.characters?.results ?? [],
    moveNext,
    movePrev,
    canMoveNext,
    canMovePrev,
    filter,
    loading
  }
}
