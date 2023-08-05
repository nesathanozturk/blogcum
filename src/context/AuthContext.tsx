import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignOut,
} from "react-firebase-hooks/auth";
import { createContext } from "react";

import { auth } from "../config/firebase";

interface FirebaseError {
  code: string;
}

import { IAuth } from "../types";

const AuthContext = createContext<IAuth | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [signOut] = useSignOut(auth);

  const handleSignUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(email, password);
      alert("Başarılı bir şekilde kayıt oldunuz!");
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null) {
        const firebaseError = error as FirebaseError;

        switch (firebaseError.code) {
          case "auth/email-already-in-use":
            alert("Bu email adresi ile kayıtlı bir kullanıcı bulunmaktadır!");
            break;
          case "auth/invalid-email":
            alert("Geçersiz bir email adresi girdiniz!");
            break;
          case "auth/weak-password":
            alert("Şifreniz çok kısa!");
            break;
          default:
            console.log(error);
        }
      } else {
        console.log(error);
      }
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(email, password);
      alert("Başarılı bir şekilde giriş yaptınız!");
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null) {
        const firebaseError = error as FirebaseError;

        switch (firebaseError.code) {
          case "auth/wrong-password":
            alert("Email için geçersiz şifre!");
            break;
          case "auth/user-not-found":
            alert("Bu email adresi ile kayıtlı bir kullanıcı bulunamadı!");
            break;
          default:
            console.log(error);
        }
      } else {
        console.log(error);
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      alert("Çıkış yaptınız!");
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
