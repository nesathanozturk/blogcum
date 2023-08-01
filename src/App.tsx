import HomePage from "./pages/home"

import { Container } from "./styles/Container.styled"
import { GlobalStyles } from "./styles/Global"

const App = () => {
  return (
    <>
    <Container>
      <GlobalStyles />
      <HomePage />
    </Container>
    </>
  )
}

export default App