import axios from 'axios'

export function getCharacter (id) {
  return axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
}
