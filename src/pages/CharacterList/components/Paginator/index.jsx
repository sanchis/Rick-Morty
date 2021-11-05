import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

export default function Paginator ({ moveNext, movePrev, canMoveNext, canMovePrev, onPaginate = () => {} }) {
  return (
    <ButtonGroup colorScheme='primary' spacing='1' mx='1'>
      <Button
        data-cy='filter-move-prev'
        leftIcon={<ArrowLeftIcon />}
        onClick={() => {
          movePrev()
          onPaginate()
        }}
        disabled={!canMovePrev()}
      >
        Prev
      </Button>
      <Button
        data-cy='filter-move-next'
        rightIcon={<ArrowRightIcon />}
        onClick={() => {
          moveNext()
          onPaginate()
        }}
        disabled={!canMoveNext()}
      >
        Next
      </Button>
    </ButtonGroup>
  )
}
