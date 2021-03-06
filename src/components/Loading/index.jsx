import { Spinner } from '@chakra-ui/react'
import React from 'react'
import Card from '../Card'
export default function Loading ({ show, children }) {
  return (
    <>
      {show ? <Card p='5' textAlign='center'><Spinner data-cy='loading-indicator' thickness='5px' size='xl' color='secondary.500' /></Card> : children}
    </>
  )
}
