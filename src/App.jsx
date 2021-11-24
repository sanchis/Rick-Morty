import React from 'react'
import { Route, Router, Switch } from 'wouter'
import { CharactersContextProvider } from './context/CharactersContext'
import Character from './pages/Character'
import CharacterList from './pages/CharacterList'
import logo from '@/../assets/logo.png'
import { useHashLocation } from './hooks/useHashLocation'
import Error from './pages/Error'
import { Container, CssBaseline } from '@mui/material'

import { ThemeContextProvider } from './context/ThemeContext'

export default function App () {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <CharactersContextProvider>
        <Container maxWidth='xl'>
          <header>
            <img
              style={{
                margin: 'auto',
                display: 'block',
                width: '100%',
                height: 'auto',
                maxWidth: '300px'
              }} src={logo}
            />
          </header>
          <Router base='/Rick-Morty' hook={useHashLocation}>
            <Switch>
              <Route path='/' component={CharacterList} />
              <Route path='/character/:id'>
                {params => <Character id={params.id} />}
              </Route>
              <Route path='/error/:code'>
                {(params) => <Error code={params.code} />}
              </Route>
              <Route>
                {() => <Error code='404' />}
              </Route>
            </Switch>
          </Router>
        </Container>
      </CharactersContextProvider>
    </ThemeContextProvider>
  )
}
