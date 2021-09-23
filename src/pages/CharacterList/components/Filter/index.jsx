import React, { useState } from 'react'
import { useCharacters } from '../../../../hooks/useCharacters'
import Paginator from '../Paginator'
import styles from './styles.module.css'

export default function Filter () {
  const { findCharacters, filter } = useCharacters()
  const [filterValue, setFilterValue] = useState(filter)
  console.log('me cambio')

  return (
    <div className={styles.containerFilter}>
      <input
        placeholder='Search name'
        type='text'
        value={filterValue}
        className={styles.input}
        onChange={(event) => {
          findCharacters(event.target.value)
          setFilterValue(event.target.value)
        }}
      />
      <Paginator />
    </div>
  )
}
