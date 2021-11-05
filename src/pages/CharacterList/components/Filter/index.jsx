import React, { useEffect, useState } from 'react'
import { Input } from '@chakra-ui/react'
import Card from '@/components/Card'
import { Flex } from '@chakra-ui/layout'
import Paginator from '../Paginator'

export default function Filter ({ filter, ...rest }) {
  const [filterValue, setFilterValue] = useState(filter)

  useEffect(() => {
    filter(filterValue)
  }, [filterValue])

  return (
    <Card boxShadow='xl' my='2' p='2'>
      <Flex direction='row'>
        <Input
          placeholder='Search by name'
          data-cy='filter-by-name'
          type='text'
          onChange={event => setFilterValue(event.target.value)}
          value={filterValue}
        />
        <Paginator {...rest} />
      </Flex>
    </Card>
  )
}
