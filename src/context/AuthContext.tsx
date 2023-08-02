import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignOut,
} from "react-firebase-hooks/auth";
import { createContext } from "react";

import { auth } from "../config/firebase";

import { IAuth } from "../types";

const AuthContext = createContext<IAuth | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [signOut] = useSignOut(auth);

  const handleSignIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(email, password);
      alert("You have successfully signed in!");
    } catch (error: any) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleSignUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(email, password);
      alert("You have successfully signed up!");
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      alert("You are sign out!");
    } catch (error) {
      console.log(error);
    }
  };

  const valueToShare = {
    handleSignUp,
    handleSignIn,
    handleSignOut,
  };

  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;
