import React from 'react'
import { Route, Router } from 'wouter'
import { CharactersContextProvider } from './context/CharactersContext'
import Character from './pages/Character'
import CharacterList from './pages/CharacterList'

export default function App () {
  return (
    <CharactersContextProvider>
      <div className='container'>
        <header>
          <img src='/img/logo.png' />
        </header>
        <Router base='/Rick-Morty'>
          <Route path='/' component={CharacterList} />
          <Route path='/character/:id'>
            {(params) => <Character id={params.id} />}
          </Route>
        </Router>
      </div>
    </CharactersContextProvider>
  )
}
