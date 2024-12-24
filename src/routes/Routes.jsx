import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LogIn from "../authentication/Login";
import Register from "../authentication/Register";
import Home from "../pages/Home";
import AllPost from "../pages/AllPost";
import AddPost from "../pages/AddPost";
import DetailsPost from "../pages/DetailsPost";
import BeAVolunteer from "../pages/BeAVolunteer";
import PrivateRoute from "./PrivateRoute";
import ManageMyPost from "../pages/ManageMyPost";
import UpdateMyNeedPost from "../pages/UpdateMyNeedPost";
import Page404 from "../pages/Page404";
import axios from "axios";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allPost",
        element: <AllPost></AllPost>,
      },
      {
        path: "/addPost",
        element: (
          <PrivateRoute>
            <AddPost></AddPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageMyPost",
        element: (
          <PrivateRoute>
            <ManageMyPost></ManageMyPost>
          </PrivateRoute>
        ),
      },
      {
        path: `/detailsPost/:id`,
        element: (
          <PrivateRoute>
            <DetailsPost></DetailsPost>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await axios.get(
            `http://localhost:4000/post/${params.id}`
          ),
      },
      {
        path: `/updatePost/:id`,
        element: (
          <PrivateRoute>
            <UpdateMyNeedPost></UpdateMyNeedPost>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/post/${params.id}`),
      },
      // {
      //   path: `/beAVolunteer/:id`,
      //   element: <BeAVolunteer></BeAVolunteer>,
      
      // },
      {
        path: `/beAVolunteer/:id`,
        element: <BeAVolunteer></BeAVolunteer>,
        loader: ({ params }) =>
          axios(`http://localhost:4000/post/${params.id}`,{withCredentials:true}),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: <Page404></Page404>,
      },
    ],
  },
  {
    path: "*",
    element: <Page404></Page404>,
  },
]);

export default router;
