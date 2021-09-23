
import React from 'react'
import { useCharacters } from '../../hooks/useCharacters'
import Filter from './components/Filter'
import CharacterItem from './components/CharacterItem'
import styles from './styles.module.css'
import Paginator from './components/Paginator'
import Loading from '../../components/Loading'

export default function List () {
  const {
    characters,
    loading
  } = useCharacters()

  return (
    <>
      <Filter />
      <Loading show={loading}>
        <div className={styles.listCharacter}>
          {characters.map(character =>
            <CharacterItem key={character.id} character={character} />
          )}
        </div>
        <Paginator />
      </Loading>
    </>
  )
}
