import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import Router from './Router'

import { GlobalStyle } from './styles/global'
import { theme } from './styles/themes/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
