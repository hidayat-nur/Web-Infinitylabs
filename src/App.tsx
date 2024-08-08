import { Box, Container, Typography } from '@mui/material'
import './App.css'
import Logo from './assets/Logo.jpg'

function App() {
  return (
    <Container maxWidth="sm">
      <Box component="section">
        <img src={Logo} alt="InfinityLabs Logo" />
      </Box>
      <Typography variant="h3" component="h2">
        Welcome to InfinityLabs
      </Typography>
    </Container>
  )
}

export default App
