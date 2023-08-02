import React from "react";

import AuthContext from "../context/AuthContext";

import useAuthContext from "../hooks/use-context";

import { IAuth } from "../types";

const WithForm = (WrappedComponent: React.FC) => {
  const NewComponent: React.FC = () => {
    const { handleSignUp, handleSignIn } = useAuthContext(AuthContext) as IAuth;

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
