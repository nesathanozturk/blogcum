import useAuthContext from "../hooks/use-auth-context";

import { IAuth, IWithForm } from "../types";

const WithForm = (WrappedComponent: React.FC<IWithForm>) => {
  const NewComponent = () => {
    const { handleSignUp, handleSignIn } = useAuthContext() as IAuth;

    return (
      <>
        <WrappedComponent
          handleSignUp={handleSignUp}
          handleSignIn={handleSignIn}
        />
      </>
    );
  };
  return NewComponent;
};

export default WithForm;
