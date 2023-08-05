import { useRoutes } from "react-router-dom";

import routes from "./router/routes";

import { Container } from "./styles/Container.styled";
import { GlobalStyles } from "./styles/Global.styled";

const App = () => {
  const content = useRoutes(routes);

  return (
    <>
      <Container>
        <GlobalStyles />
        {content}
      </Container>
    </>
  );
};

export default App;
