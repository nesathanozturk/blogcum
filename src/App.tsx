import { useRoutes } from "react-router-dom";

import routes from "./router/routes";

import { Container } from "./styles/Container.styled";
import { GlobalStyles } from "./styles/Global.styled";

const App = () => {
  return (
    <>
      <Container>
        <GlobalStyles />
        {useRoutes(routes)}
      </Container>
    </>
  );
};

export default App;
