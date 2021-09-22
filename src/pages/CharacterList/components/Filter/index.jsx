import debounce from 'just-debounce-it'
import React, { useCallback, useEffect, useState } from 'react'
import { useCharacters } from '../../../../hooks/useCharacters'

export default function Filter () {
  const { findCharacter } = useCharacters()
  const [filter, setFilter] = useState('')

  useEffect(() => {
    debounceFilter(filter)
  }, [filter])

  const debounceFilter = useCallback(
    debounce((val) => findCharacter(val), 300),
    []
  )

  return (
    <input type='text' value={filter} onChange={(event) => setFilter(event.target.value)} />
  )
}
