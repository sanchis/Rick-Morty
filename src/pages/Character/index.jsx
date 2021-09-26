import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { useCharacter } from './hooks/useCharacter'
import Card from '@/components/Card'
import CharacterSummary from '@/components/CharacterSummary'
import { useLocation } from 'wouter'
import { ArrowBackIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import Loading from '../../components/Loading'

export default function Character ({ id }) {
  const {
    character,
    moveNextCharacter,
    movePrevCharacter,
    loading
  } = useCharacter(id)
  const [, setLocation] = useLocation()

  return (
    <>
      <Card my='2' p='2'>
        <Flex justifyContent='space-between' direction={['column', 'column', 'row', 'row']}>
          <Button className='navigate-back-character' leftIcon={<ArrowBackIcon />} my={['1', '1', '0']} onClick={() => setLocation('/')}>
            Back to the list
          </Button>
          <Flex justifyContent='space-between' direction={['column', 'column', 'row', 'row']}>
            <Button
              className='navigate-prev-character'
              onClick={movePrevCharacter}
              disabled={loading}
              leftIcon={<ArrowLeftIcon />}
              my={['1', '1', '0']}
              mx='1'
            >
              Move prev character
            </Button>
            <Button
              className='navigate-next-character'
              onClick={moveNextCharacter}
              disabled={loading}
              rightIcon={<ArrowRightIcon />}
              my={['1', '1', '0']}
              mx='1'
            >
              Move next character
            </Button>
          </Flex>
        </Flex>
      </Card>
      <Loading show={loading}>
        <CharacterSummary character={character} flexDirection='row' />
      </Loading>
    </>
  )
}
