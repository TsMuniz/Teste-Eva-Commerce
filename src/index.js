import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { Base, theme } from './GlobalStyle/Base'
import ResetCss from './GlobalStyle/Reset'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetCss/>
      <Base/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

