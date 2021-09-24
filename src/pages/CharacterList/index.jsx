
import React from 'react'
import { useCharacters } from '../../hooks/useCharacters'
import Filter from './components/Filter'
import CharacterItem from './components/CharacterItem'
import Paginator from './components/Paginator'
import { Grid } from '@chakra-ui/layout'
import { Card } from '../../components/Card'

export default function List () {
  const {
    characters
  } = useCharacters()

  return (
    <>
      <Filter />
      <Grid templateColumns='repeat(auto-fill, minmax(346px, 1fr))' gap={6} alignItems='center'>
        {characters.map(character =>
          <CharacterItem key={character.id} character={character} />
        )}
      </Grid>
      <Card w='100%' p='2' my='2' display='flex' justifyContent='center'>
        <Paginator />
      </Card>
    </>
  )
}
