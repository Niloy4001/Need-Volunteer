import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LogIn from "../authentication/Login";
import Register from "../authentication/Register";
import Home from "../pages/Home";
import AllPost from "../pages/AllPost";
import AddPost from "../pages/AddPost";
import DetailsPost from "../pages/DetailsPost";
import BeAVolunteer from "../pages/BeAVolunteer";

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
            path:`/detailsPost/:id`,
            element: <DetailsPost></DetailsPost>,
            loader: ({params})=> fetch(`http://localhost:4000/post/${params.id}`)
        },
        {
            path:`/beAVolunteer/:id`,
            element: <BeAVolunteer></BeAVolunteer>,
            loader: ({params})=> fetch(`http://localhost:4000/post/${params.id}`)
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