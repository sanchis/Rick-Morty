import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

axios.defaults.baseURL = import.meta.env.RM_BASE_URL

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
