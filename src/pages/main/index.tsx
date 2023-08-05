import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import Loading from "../../components/Spinner";

import { auth } from "../../config/firebase";

const MainPage = () => {
  const [user, isLoading] = useAuthState(auth);

  if (isLoading) return <Loading />;

  if (!user) return <Navigate to="/sign-in" replace />;

  return <Outlet />;
};

export default MainPage;
