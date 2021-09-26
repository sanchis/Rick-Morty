import debounce from 'just-debounce-it'
import { useCallback, useContext } from 'react'
import { CharactersContext } from '../../../context/CharactersContext'

export function useCharactersFilter () {
  const { requestInfo, filter, setPage, setFilter, loading } = useContext(
    CharactersContext
  )

  function moveNext () {
    if (canMoveNext()) {
      setPage(page => (requestInfo.next ? page + 1 : page))
    }
  }

  function movePrev () {
    if (canMovePrev()) {
      setPage(page => (requestInfo.prev ? page - 1 : page))
    }
  }

  const findByNameDebounce = useCallback(
    debounce(name => setFilter(name), 500),
    []
  )

  function canMoveNext () {
    return requestInfo?.next && !loading
  }

  function canMovePrev () {
    return requestInfo?.prev && !loading
  }

  return {
    canMoveNext,
    canMovePrev,
    moveNext,
    movePrev,
    filter,
    findByName: findByNameDebounce
  }
}
