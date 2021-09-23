import React from 'react'
import { useCharactersFilter } from '../../hooks/useCharacterFilter'
import Paginator from '../Paginator'
import styles from './styles.module.css'

export default function Filter () {
  // const { findCharacters, filter } = useCharacters()
  // const [filterValue, setFilterValue] = useState(filter)
  // console.log('me cambio')
  const { findByName } = useCharactersFilter()

  return (
    <div className={styles.containerFilter}>
      <input
        placeholder='Search name'
        type='text'
        // value={filterValue}
        className={styles.input}
        onChange={(event) => {
          findByName(event.target.value)
          // findCharacters(event.target.value)
          // setFilterValue(event.target.value)
        }}
      />
      <Paginator />
    </div>
  )
}
