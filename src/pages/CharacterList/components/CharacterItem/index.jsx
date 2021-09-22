import React from 'react'
import { Link } from 'wouter'
import styles from './styles.module.css'

export default function CharacterItem ({ character }) {
  return (
    <>
      <div>
        <Link href={`/character/${character.id}`} className={styles.characterItem}>
          <img src={character.image} alt={character.name} loading='lazy' />
          <div className={styles.characterInfo}>
            <h2>{character.name}</h2>
            <span className='subTitle'>{character.status} - {character.species}</span>
            <p><strong>Location:</strong> {character.location.name}</p>
            <p><strong>Origin:</strong> {character.origin.name}</p>
          </div>
        </Link>
      </div>
    </>
  )
}
