import axios from 'axios'

export function getCharacter (id) {
  return axios
    .get(`character/${id}`)
    .then(response => response.data)
}
