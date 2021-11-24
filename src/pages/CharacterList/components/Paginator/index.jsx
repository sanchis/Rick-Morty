import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { useCharactersFilter } from '../../hooks/useCharacterFilter'
import { NavigateBefore, NavigateNext } from '@mui/icons-material'

export default function Paginator ({ onPaginate = () => {} }) {
  const { moveNext, movePrev, canMoveNext, canMovePrev } = useCharactersFilter()

  return (
    <ButtonGroup sx={{ ml: 1 }} variant='contained'>
      <Button
        data-cy='filter-move-prev'
        onClick={() => {
          movePrev()
          onPaginate()
        }}
        startIcon={<NavigateBefore />}
        disabled={!canMovePrev()}
      >
        Prev
      </Button>
      <Button
        data-cy='filter-move-next'
        endIcon={<NavigateNext />}
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
