import { Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Card from '../../components/Card'
import errorImage from '@/../assets/error.gif'

export default function Error ({ code, message }) {
  return (
    <>
      <Card p='5'>
        <Heading
          textAlign='center'
          fontWeight='light'
          as='h1'
          size='4xl'
          fontStyle='italic'
        >
          {code}
        </Heading>

        <Image my='5' borderRadius='2xl' mx='auto' src={errorImage} alt={code} />
      </Card>
    </>
  )
}
