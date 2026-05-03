import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";

import Home from "../pages/Home";
import Animals from "../pages/Animals";
import Details from "../pages/Details";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";
import NotFound from "../pages/NotFound";

import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // 👈 Navbar applied globally
    children: [
      { path: "/", element: <Home /> },
      { path: "/animals", element: <Animals /> },

      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },

      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },

      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },

      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;