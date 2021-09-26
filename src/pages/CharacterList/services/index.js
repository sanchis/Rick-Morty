import axios from 'axios'

export function getCharactersList (name, page) {
  return axios
    .get('https://rickandmortyapi.com/api/character', {
      params: {
        name,
        page
      }
    })
    .then(response => response.data)
}
