import React from 'react'
import Button from '../../../../components/Button'
import { useCharactersFilter } from '../../hooks/useCharacterFilter'
import styles from './styles.module.css'

export default function Paginator () {
  const { moveNext, movePrev, canMoveNext, canMovePrev } = useCharactersFilter()

  return (
    <div className={styles.paginatorContainer}>
      <Button className={styles.paginatorButtons} onClick={movePrev} disabled={!canMovePrev}>Prev</Button>
      <Button className={styles.paginatorButtons} onClick={moveNext} disabled={!canMoveNext}>Next</Button>
    </div>
  )
}
