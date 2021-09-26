import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { useCharacter } from './hooks/useCharacter'
import Card from '@/components/Card'
import CharacterSummary from '@/components/CharacterSummary'
import { useLocation } from 'wouter'

export default function Character ({ id }) {
  const { character } = useCharacter(id)
  const [, setLocation] = useLocation()

  return (
    <>
      <Card my='2' p='2'>
        <Flex justifyContent='space-between' direction={['column', 'column', 'row', 'row']}>
          <Button my={['1', '1', '0']} onClick={() => setLocation('/')}>Back to the list</Button>
          <Flex justifyContent='space-between' direction={['column', 'column', 'row', 'row']}>
            <Button my={['1', '1', '0']} mx='1'>Move prev character</Button>
            <Button my={['1', '1', '0']} mx='1'>Move next character</Button>
          </Flex>
        </Flex>
      </Card>
      {character ? <CharacterSummary character={character} flexDirection='row' /> : null}
    </>
  )
}
