import FormComponent from "../../components/FormComponent";

import AuthContext from "../../context/AuthContext";

import useAuthContext from "../../hooks/use-context";

import { IAuth } from "../../types";

const SignIn = () => {
  const { handleSignIn } = useAuthContext(AuthContext) as IAuth;

  return (
    <>
      <FormComponent
        handleForm={handleSignIn}
        formTitle="Giriş Yap"
        altMessage="Hesabınız yok mu?"
        link="/sign-up"
        linkText="Kayıt olun!"
      />
    </>
  );
};

export default SignIn;
