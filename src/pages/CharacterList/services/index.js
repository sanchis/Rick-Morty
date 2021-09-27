import axios from 'axios'

export function getCharactersList (name, page) {
  return axios
    .get('character', {
      params: {
        name,
        page
      }
    })
    .then(response => response.data)
}
