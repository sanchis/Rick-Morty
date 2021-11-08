import { gql } from '@apollo/client'

export const GetList = gql`query Characters($page: Int!, $name: String) {
    characters (page: $page, filter: { name: $name }){
      info {
        next
        prev
      },
      results {
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
    }
  }`