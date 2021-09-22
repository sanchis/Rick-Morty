
import React, { useEffect, useState } from 'react'
import { Link } from 'wouter'
import { useCharacters } from '../../hooks/useCharacters'

export default function List() {
  const { characters, moveNext, movePrev,findCharacter } = useCharacters()
  const [filter, setFilter] = useState('');


  useEffect(() => {
    findCharacter(filter)
  }, [filter])

  return (
    <>
      <input type="text" value={filter} onChange={(event) => setFilter(event.target.value)}></input>
      <ul>
        {characters.map(character =>
          <li  key={character.id}>
            <Link href={`/character/${character.id}`}>
              {character.name}
            </Link>
          </li>
        )}
      </ul>
      <button onClick={movePrev}>Prev</button>
      <button onClick={moveNext}>Next</button>
    </>
  )
}
