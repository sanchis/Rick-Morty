import { gql } from '@apollo/client'

export const GetCharacter = gql`query Character($id: ID!) {
    character(id:$id) {
      id
      name
      image
      status
      gender
      species
      location {
        name
      }
      origin {
        name
      }
      created
    }
  }`