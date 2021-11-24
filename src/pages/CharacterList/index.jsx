import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'wouter'
import Card from '../../components/Card'
import CharacterSummary from '../../components/CharacterSummary'
import Loading from '../../components/Loading'
import Filter from './components/Filter'
import Paginator from './components/Paginator'
import { useCharacters } from './hooks/useCharacters'

export default function List () {
  const { characters, loading } = useCharacters()

  return (
    <>
      <Filter />
      <Loading show={loading}>
        <Grid
          container
          display='grid'
          data-cy='container-list'
          direction='row'
          gridTemplateColumns='repeat(auto-fill, minmax(346px, 1fr))'
          gap={3}
          alignItems='center'
        >
          {characters.map(character => (
            <Link href={`/character/${character.id}`} key={character.id}>
              <Grid item>
                <CharacterSummary
                  character={character}
                />
              </Grid>
            </Link>
          ))}
        </Grid>
      </Loading>
      <Card
        w='100%'
        p={2}
        my={2}
        display='flex'
        justifyContent='center'
      >
        <Paginator onPaginate={() => window.scroll({
          behavior: 'smooth',
          top: 0
        })}
        />
      </Card>
    </>
  )
}
