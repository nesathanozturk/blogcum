import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignOut,
} from "react-firebase-hooks/auth";
import { createContext, useState } from "react";

import { auth } from "../config/firebase";

import { IAuth } from "../types";

const AuthContext = createContext<IAuth | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signOut] = useSignOut(auth);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleSignUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(email, password);
      alert("Başarılı bir şekilde kayıt oldunuz!");
    } catch (error: unknown) {
      console.log("Bir hata oluştu!", error);
      alert("Kullanıcı oluşturulamadı! Lütfen tekrar deneyiniz!");
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    try {
      const authUser = await signInWithEmailAndPassword(email, password);
      const user = authUser?.user;

      if (user) {
        alert("Başarılı bir şekilde giriş yaptınız!");
      } else {
        setErrorMessage(
          "Kullanıcı bulunamadı! Email adresinizi ve şifrenizi kontrol edin!"
        );
      }
    } catch (error: unknown) {
      console.log("Bir hata oluştu!", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      alert("Çıkış yaptınız!");
    } catch (error) {
      console.log("Çıkış yapılamadı! Lütfen tekrar deneyiniz!", error);
    }
  };

  const valueToShare = {
    handleSignUp,
    handleSignIn,
    handleSignOut,
    errorMessage,
  };

  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;
