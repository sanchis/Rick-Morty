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
    setCurrentPage((page) => page + 1)
  }

  function movePrev () {
    setCurrentPage((page) => page - 1)
  }

  const findCharacters = useCallback(
    debounce((val) => setFilter(val), 300),
    []
  )

  return {
    characters,
    loading,
    moveNext,
    movePrev,
    canMoveNext: charactersRequestInfo?.next && !loading,
    canMovePrev: charactersRequestInfo?.prev && !loading,
    findCharacters,
    filter
  }
}
