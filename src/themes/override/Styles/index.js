import { mode } from '@chakra-ui/theme-tools'

export default {
  global: (props) => ({
    '*, *::before, &::after': {
      borderColor: 'primary.600',
      wordWrap: 'break-word'
    },
    body: {
      bg: mode('white url("/img/bg.jpg") repeat fixed center', 'white url("/img/bg-dark.jpg") repeat fixed center;')(props)
    }

  })
}
