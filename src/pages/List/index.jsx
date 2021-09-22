
import React, { useEffect } from 'react'
import { Link } from 'wouter'
import { useCharacters } from '../../hooks/useCharacters'

export default function List () {
  const { characters, moveNext, movePrev } = useCharacters()

  useEffect(() => {

  }, [])

  return (
    <>
      {characters.map(character =>
        <Link href={`/character/${character.id}`} key={character.id}>
          {character.name}
        </Link>
      )}
      <button onClick={movePrev}>Prev</button>
      <button onClick={moveNext}>Next</button>
    </>
  )
}
