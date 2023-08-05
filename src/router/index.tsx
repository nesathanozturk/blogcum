import { lazy } from "react";
import type { RouteObject } from "react-router";

import WithLoading from "../hoc/WithLoading";

const AuthPage = WithLoading(lazy(() => import("../pages/auth")));
const SignUp = WithLoading(lazy(() => import("../pages/sign-up")));
const SignIn = WithLoading(lazy(() => import("../pages/sign-in")));

const MainPage = WithLoading(lazy(() => import("../pages/main")));
const HomePage = WithLoading(lazy(() => import("../pages/home")));
const Blogs = WithLoading(lazy(() => import("../pages/blogs")));
const BlogDetail = WithLoading(lazy(() => import("../pages/blog-detail")));
const Profile = WithLoading(lazy(() => import("../pages/profile")));
const NotFoundPage = WithLoading(lazy(() => import("../pages/not-found")));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AuthPage />,
    children: [
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetail />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
