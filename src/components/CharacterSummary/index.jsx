import { Skeleton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Card from './../Card'

export default function CharacterSummary ({
  character,
  flexDirection,
  ...rest
}) {
  const [imageLoaded, setImageLoaded] = useState(false)

  function formatDate (date) {
    const dateObj = new Date(date)
    return `${dateObj.getUTCDate()}/${dateObj.getUTCMonth()}/${dateObj.getUTCFullYear()} ${dateObj.getUTCHours()}:${dateObj.getUTCMinutes()}`
  }

  return (
    <Card {...rest} data-cy='character-content'>
      <Box sx={{
        display: 'flex',
        flexDirection: flexDirection ?? {
          xs: 'row',
          sm: 'row',
          md: 'column',
          lg: 'column',
          xl: 'column'
        }
      }}
      >
        <>
          {imageLoaded ??
            <Skeleton
              variant='circular' sx={{
                width: {
                  sm: 100,
                  md: 300
                },
                height: {
                  sm: 100,
                  md: 300
                }
              }} hidden={imageLoaded}
            />}
        </>

        <img
          sx={{
            maxWidth: {
              xs: '30%',
              sm: '30%',
              md: '100%',
              lg: '100%'
            },
            maxHeight: '300px'
          }}
          hidden={!imageLoaded} src={character.image} onLoad={() => setImageLoaded(true)} alt={character.name}
        />
        <Box p={1} overflow='hidden' textOverflow='ellipsis'>
          <Typography variant='h4' noWrap>
            {character.name}
          </Typography>
          <Typography component='p' color='grey.500'>
            {character.status} - {character.gender} {character.species}
          </Typography>
          <Typography component='p'>
            <Typography variant='highlight'>
              Location:
            </Typography>
            {character.location.name}
          </Typography>
          <Typography component='p'>
            <Typography variant='highlight'>
              Origin:
            </Typography>
            {character.origin.name}
          </Typography>
          <Typography variant='highlight'>
            Created:
          </Typography>
          <Typography component='span'>{formatDate(character.created)}</Typography>
        </Box>
      </Box>
    </Card>
  )
}
