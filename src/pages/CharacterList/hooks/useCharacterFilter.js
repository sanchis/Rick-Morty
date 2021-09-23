import debounce from 'just-debounce-it'
import { useContext } from 'react'
import { CharactersContext } from '../../../context/CharactersContext'

export function useCharactersFilter () {
  const {
    requestInfo,
    setPage,
    setFilter
  } = useContext(CharactersContext)

  function moveNext () {
    setPage((page) => requestInfo.next ? page + 1 : page)
  }

  function movePrev () {
    setPage((page) => requestInfo.prev ? page - 1 : page)
  }

  const findByNameDebounce = debounce((name) => setFilter(name))

  return {
    canMoveNext: requestInfo?.next,
    canMovePrev: requestInfo?.prev,
    moveNext,
    movePrev,
    findByName: findByNameDebounce
  }
}
