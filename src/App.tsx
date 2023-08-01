import Header from "./layouts/header"

import { Container } from "./styles/Container.styled"
import { GlobalStyles } from "./styles/Global"

const App = () => {
  return (
    <>
    <Container>
      <GlobalStyles />
      <Header />
    </Container>
    </>
  )
}

export default App