import React from 'react'
import { useCharacter } from './hooks/useCharacter'
import CharacterSummary from '@/components/CharacterSummary'
import Loading from '@/components/Loading'
import Navigation from './components/Navigation'

export default function Character ({ id }) {
  const {
    character,
    moveNextCharacter,
    movePrevCharacter,
    loading
  } = useCharacter(id)

  return (
    <>
      <Navigation loading={loading} onMoveNextCharacter={moveNextCharacter} onMovePrevCharacter={movePrevCharacter} />
      <Loading show={loading}>
        <CharacterSummary character={character} flexDirection='row' />
      </Loading>
    </>
  )
}
