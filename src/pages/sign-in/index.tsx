import React from "react";

import WithForm from "../../hoc/WithForm";
import FormComponent from "../../components/FormComponent";

import { ISignInFunction } from "../../types";

const SignIn: React.FC<ISignInFunction> = ({ handleSignIn }) => {
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

export default WithForm(SignIn);
