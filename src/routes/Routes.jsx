import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LogIn from "../authentication/Login";
import Register from "../authentication/Register";
import Home from "../pages/Home";
import AllPost from "../pages/AllPost";
import AddPost from "../pages/AddPost";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
        },
        {
            path:"/allPost",
            element: <AllPost></AllPost>,
        },
        {
            path:"/addPost",
            element: <AddPost></AddPost>,
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