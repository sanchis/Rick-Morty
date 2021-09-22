import React from 'react'
import { Link } from 'wouter'

export default function ListItem ({ character }) {
  return (
    <>
      <li>
        <Link href={`/character/${character.id}`}>
          {character.name}
        </Link>
      </li>
    </>
  )
}
