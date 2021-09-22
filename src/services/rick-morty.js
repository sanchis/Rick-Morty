import axios from 'axios'

export function getCharactersList (paginateUrl = null, name = null) {
  return axios.get(`${paginateUrl || 'https://rickandmortyapi.com/api/character'}`, {
    params: {
      name
    }
  })
    .then(response => response.data)
}

export function getCharacter (id) {
  return axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
}
