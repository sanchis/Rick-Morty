import debounce from 'just-debounce-it'
import React, { useCallback, useEffect, useState } from 'react'
import { useCharacters } from '../../../../hooks/useCharacters'
import Paginator from '../Paginator'
import styles from './styles.module.css'

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
    <div className={styles.containerFilter}>

      <input
        placeholder='Search name'
        type='text'
        className={styles.input}
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      <Paginator />
    </div>
  )
}
