import { Image } from '@chakra-ui/image'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { SkeletonCircle, Tooltip } from '@chakra-ui/react'
import { Card } from '@/components/Card'
import { Link } from 'wouter'

export default function CharacterItem ({ character }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <>
      <Link href={`/character/${character.id}`}>
        <Card
          cursor='pointer' _hover={{
            transform: 'scale(1.1)'
          }}
          boxShadow='xl'
          transition='0.1s ease-in-out'
        >
          <Flex direction={['row', 'row', 'column', 'column', 'column']}>
            <SkeletonCircle alignSelf='center' size={['100', '100', '300']} hidden={imageLoaded} />
            <Image
              src={character.image} maxW={['30%', '30%', '100%']} maxH='300px'
              objectFit='cover' objectPosition='top' alt={character.name} hidden={!imageLoaded}
              onLoad={() => setImageLoaded(true)}
            />

            <Box p='2' overflow='hidden'>
              <Tooltip label={character.name}>
                <Heading as='h2' size='lg' isTruncated>{character.name}</Heading>
              </Tooltip>
              <Text variant='subTitle' isTruncated>{character.status} - {character.species}</Text>
              <Tooltip label={character.location.name}>
                <Text isTruncated>
                  <Text as='span' variant='hightLight'>Location: </Text>{character.location.name}
                </Text>
              </Tooltip>
              <Tooltip label={character.origin.name}>
                <Text isTruncated>
                  <Text as='span' variant='hightLight'>Origin: </Text>{character.origin.name}
                </Text>
              </Tooltip>
            </Box>
          </Flex>
        </Card>
      </Link>
    </>
  )
}
