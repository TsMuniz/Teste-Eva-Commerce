import { createGlobalStyle } from 'styled-components'

const theme = {
  primaryColor: '#E5E5E5',
  secondaryColor: '#0C0D0D',
  accentColor: '#E11383'
}


const Base = createGlobalStyle`
  :root {
    font-size: 62.5%; 
    font-family: 'Roboto', sans-serif;
  }
`

export { Base, theme }
