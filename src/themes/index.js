import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import Input from './override/Input'
import Card from './override/Card'
import Button from './override/Button'
import Tooltip from './override/Tooltip'
import styles from './override/Styles'

const colors = {
  primary: {
    50: '#d8fff8',
    100: '#acfff9',
    200: '#7dfffc',
    300: '#4dfcff',
    400: '#27f2fe',
    500: '#17d2e5',
    600: '#009eb3',
    700: '#007a81',
    800: '#004f4f',
    900: '#001e1d'
  },
  secondary: {
    50: '#eefbe2',
    100: '#d9eebf',
    200: '#c4e19b',
    300: '#afd575',
    400: '#9ec94f',
    500: '#7cb036',
    600: '#5a8928',
    700: '#3b621b',
    800: '#1e3b0d',
    900: '#051500'
  }
}

const components = {
  Input,
  Card,
  Button,
  Tooltip
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}
export default extendTheme({ styles, colors, config, components }, withDefaultColorScheme({ colorScheme: 'primary' })
)
