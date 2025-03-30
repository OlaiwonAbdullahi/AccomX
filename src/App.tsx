import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { useEffect } from "react";
import { Home, NotFound } from "./pages";

import { Scroll } from "./animation";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import StudentSignup from "./pages/signupPages/student-signup";
import Roomates from "./pages/roomates";
import Message from "./pages/message";

// this is just for dome pages you want to repeat same component
const Root = () => {
  return (
    <div>
      {/* here we might add navbar */}
      <ScrollRestoration />
      <Outlet />
      {/* here maybe footer, it will show in all the pages */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/studentsignup",
        element: <StudentSignup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/roomates",
        element: <Roomates />,
      },
      {
        path: "/message",
        element: <Message />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  // we can create another route object here if we don't want the <Root/> to affect it
]);
export default function App() {
  useEffect(() => {
    Scroll();
  }, []);
  return (
    <>
      <Outlet />
      <RouterProvider router={router} />
    </>
  );
}
