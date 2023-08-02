import { Routes, Route } from "react-router-dom";

import Header from "./layouts/header";
import Footer from "./layouts/footer";

import HomePage from "./pages/home";
import Blogs from "./pages/blogs";
import NotFoundPage from "./pages/not-found";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Profile from "./pages/profile";

import { Container } from "./styles/Container.styled";
import { GlobalStyles } from "./styles/Global";
import AuthPage from "./pages/auth";
import MainPage from "./pages/main";

const App = () => {
  return (
    <>
      <Container>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<AuthPage />}>
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
          </Route>
          <Route path="/" element={<MainPage />}>
            <Route index={true} path="/" element={<HomePage />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <Footer />
      </Container>
    </>
  );
};

export default App;
