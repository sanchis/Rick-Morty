import secondary from '../../palette/secondary'

export default {
  variants: [{
    props: { variant: 'highlight' },
    style: {
      color: secondary.main,
      fontWeight: 'bold',
      marginRight: 2
    }
  }]
}
