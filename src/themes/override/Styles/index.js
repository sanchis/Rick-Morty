import { mode } from '@chakra-ui/theme-tools'
import bg from '@/../assets/bg.jpg'
import bgDark from '@/../assets/bg-dark.jpg'

export default {
  global: props => ({
    '*, *::before, &::after': {
      borderColor: 'primary.600',
      wordWrap: 'break-word'
    },
    body: {
      bg: mode(
        `white url("${bg}") repeat fixed center`,
        `white url("${bgDark}") repeat fixed center;`
      )(props)
    }
  })
}
