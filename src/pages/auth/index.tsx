import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import Loading from "../../components/Spinner";

import { auth } from "../../config/firebase";

const AuthPage = () => {
  const [user, isLoading] = useAuthState(auth);

  if (isLoading) return <Loading />;

  if (user) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default AuthPage;
