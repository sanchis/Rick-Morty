import React, { useEffect, useState } from 'react'
import { useCharactersFilter } from '../../hooks/useCharacterFilter'
import Paginator from '../Paginator'
import { Input } from '@chakra-ui/react'
import Card from '@/components/Card'
import { Flex } from '@chakra-ui/layout'

export default function Filter () {
  const { findByName, filter } = useCharactersFilter()
  const [filterValue, setFilterValue] = useState(filter)

  useEffect(() => {
    findByName(filterValue)
  }, [filterValue])

  return (
    <Card boxShadow='xl' my='2' p='2'>
      <Flex direction='row'>
        <Input
          placeholder='Search by name' type='text'
          onChange={(event) => setFilterValue(event.target.value)}
          value={filterValue}
        />
        <Paginator />
      </Flex>
    </Card>
  )
}
