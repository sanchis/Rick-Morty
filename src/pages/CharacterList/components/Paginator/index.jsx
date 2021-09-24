import React from 'react'
import { useCharacters } from '@/hooks/useCharacters'
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function Paginator () {
  const { moveNext, movePrev, canMoveNext, canMovePrev } = useCharacters()

  return (
    <>
      <ButtonGroup colorScheme='primary' spacing='1' mx='1'>
        <Button onClick={movePrev} disabled={!canMovePrev}>Prev</Button>
        <Button onClick={moveNext} disabled={!canMoveNext}>Next</Button>
      </ButtonGroup>
    </>
  )
}
