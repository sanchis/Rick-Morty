import React from 'react'
import { Route, Router, Switch } from 'wouter'
import { CharactersContextProvider } from './context/CharactersContext'
import Character from './pages/Character'
import CharacterList from './pages/CharacterList'
import { ChakraProvider, Container, Image } from '@chakra-ui/react'
import theme from './themes'
import logo from '@/../assets/logo.png'
import { useHashLocation } from './hooks/useHashLocation'
import Error from './pages/Error'

export default function App () {
  return (
    <ChakraProvider theme={theme}>
      <CharactersContextProvider>
        <Container maxW='container.xl'>
          <header>
            <Image margin='auto' src={logo} />
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
    </ChakraProvider>
  )
}
