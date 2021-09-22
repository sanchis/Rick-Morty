import axios from 'axios'

export function getCharactersList (paginateUrl) {
  return axios.get(`${paginateUrl || 'https://rickandmortyapi.com/api/character'}`)
    .then(response => response.data)
}

export function getCharacter (id) {
  return axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
}
