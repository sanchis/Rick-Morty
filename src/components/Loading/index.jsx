import { CircularProgress } from '@mui/material'
import React from 'react'
import Card from '../Card'

export default function Loading ({ show, children }) {
  return (
    <>
      {show ? <Card p='5' textAlign='center'><CircularProgress data-cy='loading-indicator' /></Card> : children}
    </>
  )
}
