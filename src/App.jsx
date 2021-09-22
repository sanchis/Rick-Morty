import React from 'react'
import { Route, Router } from 'wouter'
import { CharactersContextProvider } from './context/CharactersContext'
import Character from './pages/character'
import List from './pages/List'

export default function App () {
  return (
    <CharactersContextProvider>
      <Router base='/Rick-Morty'>
        <Route path='/' component={List} />
        <Route path='/character/:id'>
          {(params) => <Character id={params.id} />}
        </Route>
      </Router>
    </CharactersContextProvider>
  )
}
