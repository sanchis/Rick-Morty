import { mode } from '@chakra-ui/theme-tools'
export default {
  baseStyle: props => ({
    borderWidth: '5px',
    borderColor: 'primary.600',
    borderRadius: 'lg',
    background: mode('gray.50', 'gray.800')(props)
  })
}
