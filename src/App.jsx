import React from 'react'
import { Route, Router } from 'wouter'
import { CharactersContextProvider } from './context/CharactersContext'
import Character from './pages/Character'
import CharacterList from './pages/CharacterList'
import { ChakraProvider, Container, Image } from '@chakra-ui/react'
import theme from './themes'
import logo from '@/../assets/logo.png'

export default function App () {
  return (
    <ChakraProvider theme={theme}>
      <CharactersContextProvider>
        <Container maxW='container.xl'>
          <header>
            <Image margin='auto' src={logo} />
          </header>
          <Router base='/Rick-Morty'>
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
