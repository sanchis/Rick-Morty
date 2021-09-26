import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useCharactersFilter } from '../../hooks/useCharacterFilter'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

export default function Paginator () {
  const { moveNext, movePrev, canMoveNext, canMovePrev } = useCharactersFilter()

  return (
    <ButtonGroup colorScheme='primary' spacing='1' mx='1'>
      <Button
        className='filter-move-prev'
        leftIcon={<ArrowLeftIcon />}
        onClick={movePrev}
        disabled={!canMovePrev()}
      >
        Prev
      </Button>
      <Button
        className='filter-move-next'
        rightIcon={<ArrowRightIcon />}
        onClick={moveNext}
        disabled={!canMoveNext()}
      >
        Next
      </Button>
    </ButtonGroup>
  )
}
