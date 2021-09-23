import React from 'react'
import { useCharacter } from './hooks/useCharacter'

export default function Character ({ id }) {
  const { character } = useCharacter(id)

  return (
    <div>
      {id}
      {JSON.stringify(character)}
    </div>
  )
}
