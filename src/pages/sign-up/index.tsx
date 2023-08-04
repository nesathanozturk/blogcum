import WithForm from "../../hoc/WithForm";

import FormComponent from "../../components/FormComponent";

import { ISignUpFunction } from "../../types";

const SignUp: React.FC<ISignUpFunction> = ({ handleSignUp }) => {
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

export default WithForm(SignUp);
