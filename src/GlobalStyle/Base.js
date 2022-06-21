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

  ::-webkit-scrollbar {
    width: 10px;
    background-color: ${({theme}) => theme.primaryColor};
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.accentColor};
    border-radius: 8px;
  }
  body {
  }
`

export { Base, theme }
