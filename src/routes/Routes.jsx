import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LogIn from "../authentication/Login";
import Register from "../authentication/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element: <h1>Home</h1>,
        },
        {
            path:"/login",
            element: <LogIn></LogIn>,
        },
        {
            path:"/register",
            element: <Register></Register>,
        },
      ]
    },
  ]);

  export default router