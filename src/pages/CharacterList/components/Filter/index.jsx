import debounce from 'just-debounce-it'
import React, { useCallback, useEffect, useState } from 'react'
import { useCharacters } from '../../../../hooks/useCharacters'
import Paginator from '../Paginator'
import styles from './styles.module.css'

export default function Filter () {
  const [filter, setFilter] = useState('')
  const { findCharacters, loading } = useCharacters()

  useEffect(() => {
    debounceFilter(filter)
  }, [filter])

  const debounceFilter = useCallback(
    debounce((val) => findCharacters(val), 300),
    []
  )

  return (
    <div className={styles.containerFilter}>
      {JSON.stringify(loading)}

      <input
        placeholder='Search name'
        type='text'
        value={filter}
        className={styles.input}
        onChange={(event) => setFilter(event.target.value)}
      />
      <Paginator />
    </div>
  )
}
