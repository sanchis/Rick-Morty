import React from 'react'
import { useCharacters } from './hooks/useCharacters'
import Filter from './components/Filter'
import CharacterSummary from '@/components/CharacterSummary'
import Paginator from './components/Paginator'
import { Grid } from '@chakra-ui/layout'
import Card from '@/components/Card'
import { Link } from 'wouter'

export default function List () {
  const { characters } = useCharacters()

  return (
    <>
      <Filter />

      <Grid
        templateColumns='repeat(auto-fill, minmax(346px, 1fr))'
        gap={6}
        alignItems='center'
      >
        {characters.map(character => (
          <Link href={`/character/${character.id}`} key={character.id}>
            <CharacterSummary
              character={character}
              cursor='pointer'
              _hover={{
                transform: 'scale(1.1)'
              }}
              transition='0.1s ease-in-out'
            />
          </Link>
        ))}
      </Grid>

      <Card
        w='100%'
        p='2'
        my='2'
        display='flex'
        boxShadow='xl'
        justifyContent='center'
      >
        <Paginator />
      </Card>
    </>
  )
}
