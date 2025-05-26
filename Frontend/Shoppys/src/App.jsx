import { ThemeProvider } from '@emotion/react'
import Home from './components/Home'
import { CssBaseline } from '@mui/material'
import theme from './Theme'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
