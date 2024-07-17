import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout"
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Events from "../Pages/Events/Events";
import Blogs from "../Pages/Blogs/Blogs";
import Services_Page from "../Pages/Services_page/Services_Page";
import Single_Blog from "../Components/Blog/Single_Blog/Single_Blog"
import Single_Event from "../Pages/Single_Event/Single_Event";
import Study_Destination from "../Pages/Study_Destination/Study_Destination";
import Registration from "../Pages/Registration/Registration";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/services",
        element: <Services_Page />,
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/SingleBlogs",
        element: <Single_Blog />
      },
      {
        path: "/SingleEvent",
        element: <Single_Event />
      },
      {
        path: "/StudyDestination",
        element: <Study_Destination />
      },
      {
        path: "/register",
        element: <Registration/>
      },
      
    ],
  },
]);
