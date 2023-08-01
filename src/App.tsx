import { Routes, Route } from "react-router-dom";

import Blogs from "./pages/blogs";
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
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Container>
    </>
  )
}

export default App