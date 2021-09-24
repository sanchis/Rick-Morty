import React, { useState } from 'react'
import { useCharacters } from '@/hooks/useCharacters'
import Paginator from '../Paginator'
import { Input } from '@chakra-ui/react'
import { Card } from '@/components/Card'
import { Flex } from '@chakra-ui/layout'

export default function Filter () {
  const { findCharacters, filter } = useCharacters()
  const [filterValue, setFilterValue] = useState(filter)

  return (
    <Card boxShadow='md' my='2'>
      <Flex m='3' direction='row'>
        <Input
          placeholder='Search by name' type='text' onChange={(event) => {
            findCharacters(event.target.value)
            setFilterValue(event.target.value)
          }}
          value={filterValue}
        />
        <Paginator />
      </Flex>
    </Card>
  )
}
