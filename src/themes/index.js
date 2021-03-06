import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import styles from './override/Styles'
import colors from './override/Colors'
import components from './override/Components'
import config from './override/Config'

// Override current theme with colors R&M
export default extendTheme(
  { styles, colors, config, components },
  withDefaultColorScheme({ colorScheme: 'primary' })
)
