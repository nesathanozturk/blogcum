import { lazy, Suspense } from "react";

import Loading from "../components/Loading";

const AuthPage = lazy(() => import("../pages/auth"));
const SignUp = lazy(() => import("../pages/sign-up"));
const SignIn = lazy(() => import("../pages/sign-in"));

const MainPage = lazy(() => import("../pages/main"));
const HomePage = lazy(() => import("../pages/home"));
const Blogs = lazy(() => import("../pages/blogs"));
const Profile = lazy(() => import("../pages/profile"));
const NotFoundPage = lazy(() => import("../pages/not-found"));

const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <AuthPage />
      </Suspense>
    ),
    children: [
      {
        path: "sign-up",
        element: (
          <Suspense fallback={<Loading />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "sign-in",
        element: (
          <Suspense fallback={<Loading />}>
            <SignIn />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <MainPage />
      </Suspense>
    ),
    children: [
      {
        path: "",
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "blogs",
        element: (
          <Suspense fallback={<Loading />}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "blogs/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<Loading />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loading />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
