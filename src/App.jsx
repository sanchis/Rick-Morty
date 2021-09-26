import React, { useState, useEffect } from 'react'
import { Route, Router } from 'wouter'
import { CharactersContextProvider } from './context/CharactersContext'
import Character from './pages/Character'
import CharacterList from './pages/CharacterList'
import { ChakraProvider, Container, Image } from '@chakra-ui/react'
import theme from './themes'
import logo from '@/../assets/logo.png'

// returns the current hash location in a normalized form
// (excluding the leading '#' symbol)
const currentLocation = () => {
  return window.location.hash.replace(/^#/, '') || '/'
}

const navigate = (to) => (window.location.hash = to)

const useHashLocation = () => {
  const [loc, setLoc] = useState(currentLocation())

  useEffect(() => {
    // this function is called whenever the hash changes
    const handler = () => setLoc(currentLocation())

    // subscribe to hash changes
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  return [loc, navigate]
}

export default function App () {
  return (
    <ChakraProvider theme={theme}>
      <CharactersContextProvider>
        <Container maxW='container.xl'>
          <header>
            <Image margin='auto' src={logo} />
          </header>
          <Router base='/Rick-Morty' hook={useHashLocation}>
            <Route path='/' exact component={CharacterList} />
            <Route path='/character/:id'>
              {(params) => <Character id={params.id} />}
            </Route>
          </Router>
        </Container>
      </CharactersContextProvider>
    </ChakraProvider>
  )
}
