import { Typography } from '@mui/material'
import React from 'react'
import Card from '../../components/Card'
import errorImage from '@/../assets/error.gif'

export default function Error ({ code, message }) {
  return (
    <>
      <Card p={5}>
        <Typography
          textAlign='center'
          fontWeight='light'
          variant='h2'
          fontStyle='italic'
        >
          {code}
        </Typography>

        <img
          my={5} style={{
            width: '100%',
            maxWidth: '300px',
            margin: 'auto',
            textAlign: 'center',
            display: 'block'
          }} mx='auto' src={errorImage} alt={code}
        />
      </Card>
    </>
  )
}
