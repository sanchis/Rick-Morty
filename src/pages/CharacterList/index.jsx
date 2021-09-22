
import React from 'react'
import { useCharacters } from '../../hooks/useCharacters'
import Filter from './components/Filter'
import ListItem from './components/ListItem'

export default function List () {
  const { characters, moveNext, movePrev } = useCharacters()

  return (
    <>
      <Filter />
      <ul>
        {characters.map(character =>
          <ListItem key={character.id} character={character} />
        )}
      </ul>
      <button onClick={movePrev}>Prev</button>
      <button onClick={moveNext}>Next</button>
    </>
  )
}
