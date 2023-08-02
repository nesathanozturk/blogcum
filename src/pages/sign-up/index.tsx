import FormComponent from "../../components/FormComponent";

import AuthContext from "../../context/AuthContext";

import useAuthContext from "../../hooks/use-context";

import { IAuth } from "../../types";

const SignUp = () => {
  const { handleSignUp } = useAuthContext(AuthContext) as IAuth;

  return (
    <>
      <FormComponent
        handleForm={handleSignUp}
        formTitle="Kayıt Ol"
        altMessage="Zaten bir hesabınız var mı?"
        link="/sign-in"
        linkText="Giriş yapın!"
      />
    </>
  );
};

export default SignUp;
