import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root.tsx";
import Home from "../pages/Home/Home.tsx";
import Login from "../pages/Login/Login.tsx";
import Register from "../pages/Register/Register.tsx";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword.tsx";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgetPassword />,
      },
    ],
  },
]);

export default App;
