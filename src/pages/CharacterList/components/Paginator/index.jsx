import React from 'react'
import Button from '../../../../components/Button'
import { useCharacters } from '../../../../hooks/useCharacters'
import styles from './styles.module.css'

export default function Paginator () {
  const { moveNext, movePrev, canMoveNext, canMovePrev } = useCharacters()

  return (
    <div className={styles.paginatorContainer}>
      <Button className={styles.paginatorButtons} onClick={movePrev} disabled={!canMovePrev}>Prev</Button>
      <Button className={styles.paginatorButtons} onClick={moveNext} disabled={!canMoveNext}>Next</Button>
    </div>
  )
}
