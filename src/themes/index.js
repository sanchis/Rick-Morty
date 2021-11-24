
import { createTheme } from '@mui/material/styles'
import components from './override/Components'
import palette from './override/palette'
export default (theme) => createTheme({
  palette: palette(theme),
  components
})
