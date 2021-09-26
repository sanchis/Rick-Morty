import { Image } from '@chakra-ui/image'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { SkeletonCircle } from '@chakra-ui/react'
import Card from './../Card'

export default function CharacterSummary ({
  character,
  flexDirection,
  ...rest
}) {
  const [imageLoaded, setImageLoaded] = useState(false)

  function formatDate (date) {
    const dateObj = new Date(date)
    return `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()} 
      ${dateObj.getHours()}:${dateObj.getMinutes()}`
  }

  return (
    <>
      <Card {...rest} boxShadow='xl'>
        <Flex direction={flexDirection ?? ['row', 'row', 'column', 'column', 'column']}>
          <SkeletonCircle alignSelf='center' size={['100', '100', '300']} hidden={imageLoaded} />
          <Image
            src={character.image}
            maxW={['30%', '30%', '100%']}
            maxH='300px'
            objectFit='cover'
            objectPosition='top'
            alt={character.name}
            hidden={!imageLoaded}
            onLoad={() => setImageLoaded(true)}
          />
          <Box p='2' overflow='hidden'>
            <Heading as='h2' size='lg' isTruncated>
              {character.name}
            </Heading>
            <Text variant='subTitle' isTruncated>
              {character.status} - {character.gender} {character.species}
            </Text>
            <Text isTruncated>
              <Text as='span' variant='hightLight'>
                Location:{' '}
              </Text>
              {character.location.name}
            </Text>
            <Text isTruncated>
              <Text as='span' variant='hightLight'>
                Origin:{' '}
              </Text>
              {character.origin.name}
            </Text>
            <Text as='span' variant='hightLight'>
              Created:{' '}
            </Text>
            <Text as='span'> {formatDate(character.created)}</Text>
          </Box>
        </Flex>
      </Card>
    </>
  )
}
