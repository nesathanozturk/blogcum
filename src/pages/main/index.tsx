import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import Spinner from "../../components/Spinner";

import { auth } from "../../config/firebase";

const MainPage = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Spinner />;

  if (!user) return <Navigate to="/sign-in" replace />;

  return <Outlet />;
};

export default MainPage;
