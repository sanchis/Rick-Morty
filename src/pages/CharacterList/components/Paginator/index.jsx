import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useCharactersFilter } from '../../hooks/useCharacterFilter'

export default function Paginator () {
  const { moveNext, movePrev, canMoveNext, canMovePrev } = useCharactersFilter()

  return (
    <ButtonGroup colorScheme='primary' spacing='1' mx='1'>
      <Button onClick={movePrev} disabled={!canMovePrev}>Prev</Button>
      <Button onClick={moveNext} disabled={!canMoveNext}>Next</Button>
    </ButtonGroup>
  )
}
