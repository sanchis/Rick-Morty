import debounce from 'just-debounce-it'
import { useCallback, useContext } from 'react'
import { CharactersContext } from '@/context/CharactersContext'

export function useCharacters () {
  const {
    characters, filter,
    setFilter,
    charactersRequestInfo,
    loading,
    setCurrentPage
  } = useContext(CharactersContext)

  function moveNext () {
    if (canMoveNext()) {
      setCurrentPage((page) => page + 1)
    }
  }

  function movePrev () {
    if (canMovePrev()) {
      setCurrentPage((page) => page - 1)
    }
  }

  const findCharacters = useCallback(
    debounce((val) => setFilter(val), 300),
    []
  )

  function canMoveNext () {
    return charactersRequestInfo?.next && !loading
  }

  function canMovePrev () {
    return charactersRequestInfo?.prev && !loading
  }

  return {
    characters,
    loading,
    moveNext,
    movePrev,
    canMoveNext,
    canMovePrev,
    findCharacters,
    filter
  }
}
