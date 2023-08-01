import Header from "./layouts/header"
import Hero from "./layouts/hero"

import { Container } from "./styles/Container.styled"
import { GlobalStyles } from "./styles/Global"

const App = () => {
  return (
    <>
    <Container>
      <GlobalStyles />
      <Header />
      <Hero />
    </Container>
    </>
  )
}

export default App