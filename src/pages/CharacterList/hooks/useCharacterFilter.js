import debounce from 'just-debounce-it'
import { useCallback, useContext } from 'react'
import { CharactersContext } from '../../../context/CharactersContext'

export function useCharactersFilter () {
  const {
    requestInfo,
    filter,
    setPage,
    setFilter
  } = useContext(CharactersContext)

  function moveNext () {
    setPage((page) => requestInfo.next ? page + 1 : page)
  }

  function movePrev () {
    setPage((page) => requestInfo.prev ? page - 1 : page)
  }

  const findByNameDebounce = useCallback(debounce((name) => setFilter(name),500),[])

  return {
    canMoveNext: requestInfo?.next,
    canMovePrev: requestInfo?.prev,
    moveNext,
    movePrev,
    filter,
    findByName: findByNameDebounce
  }
}
