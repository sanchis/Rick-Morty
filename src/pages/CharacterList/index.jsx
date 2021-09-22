
import React from 'react'
import { useCharacters } from '../../hooks/useCharacters'
import Filter from './components/Filter'
import CharacterItem from './components/CharacterItem'
import styles from './styles.module.css'
import Paginator from './components/Paginator'

export default function List () {
  const { characters } = useCharacters()

  return (
    <>
      <Filter />
      <div className={styles.listCharacter}>
        {characters.map(character =>
          <CharacterItem key={character.id} character={character} />
        )}
      </div>
      <Paginator />
    </>
  )
}
