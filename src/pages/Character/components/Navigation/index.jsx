import { NavigateBefore, NavigateNext } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useLocation } from 'wouter'
import Card from '../../../../components/Card'

export default function Navigation ({ loading, onMovePrevCharacter, onMoveNextCharacter }) {
  const [, setLocation] = useLocation()

  return (
    <Card my={2} p={2}>
      <Box
        display='flex' justifyContent='space-between' sx={{
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'row',
            lg: 'row'
          }
        }}
        gap={1}
      >
        <Button
          variant='contained'
          data-cy='navigate-back-character' startIcon={<NavigateBefore />}
          onClick={() => setLocation('/')}
        >
          Back to the list
        </Button>
        <Box
          display='flex' justifyContent='space-between' sx={{
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row'
            }
          }}
          gap={1}
        >
          <Button
            variant='contained'
            data-cy='navigate-prev-character'
            onClick={onMovePrevCharacter}
            disabled={loading}
            startIcon={<NavigateBefore />}
          >
            Move prev character
          </Button>
          <Button
            variant='contained'
            data-cy='navigate-next-character'
            onClick={onMoveNextCharacter}
            disabled={loading}
            endIcon={<NavigateNext />}
          >
            Move next character
          </Button>
        </Box>
      </Box>
    </Card>
  )
}
