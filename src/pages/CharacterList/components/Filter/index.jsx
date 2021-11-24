import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Card from '../../../../components/Card'
import { useCharactersFilter } from '../../hooks/useCharacterFilter'
import Paginator from '../Paginator'

export default function Filter () {
  const { findByName, filter } = useCharactersFilter()
  const [filterValue, setFilterValue] = useState(filter)

  useEffect(() => {
    findByName(filterValue)
  }, [filterValue])

  return (
    <Card my={1} padding={1}>
      <Box flexDirection='row' display='flex'>
        <TextField
          placeholder='Search by name'
          data-cy='filter-by-name'
          fullWidth
          type='text'
          onChange={event => setFilterValue(event.target.value)}
          value={filterValue}
        />
        <Paginator />
      </Box>
    </Card>
  )
}
