import { Routes, Route } from "react-router-dom";

import Blogs from "./pages/blogs";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import HomePage from "./pages/home"
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Profile from "./pages/profile";

import { Container } from "./styles/Container.styled"
import { GlobalStyles } from "./styles/Global"


const App = () => {
  return (
    <>
    <Container>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Container>
    </>
  )
}

export default App