import React from 'react'
import { Route, Router } from 'wouter'
import { CharactersContextProvider } from './context/CharactersContext'
import Character from './pages/Character'
import CharacterList from './pages/CharacterList'

export default function App () {
  return (
    <CharactersContextProvider>
      <Router base='/Rick-Morty'>
        <Route path='/' component={CharacterList} />
        <Route path='/character/:id'>
          {(params) => <Character id={params.id} />}
        </Route>
      </Router>
    </CharactersContextProvider>
  )
}