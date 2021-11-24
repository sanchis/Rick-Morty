import background from './background'
import primary from './primary'
import secondary from './secondary'

export default (themeMode) => ({
  mode: themeMode,
  primary,
  secondary,
  background: background(themeMode)
})
