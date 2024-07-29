import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Events from "../Pages/Events/Events";
import Blogs from "../Pages/Blogs/Blogs";
import Services_Page from "../Pages/Services_page/Services_Page";
import Single_Blog from "../Components/Blog/Single_Blog/Single_Blog";
import Single_Event from "../Pages/Single_Event/Single_Event";
import Registration from "../Pages/Registration/Registration";
import Single_University from "../Pages/Single_University/Single_University";
import UK from "../Pages/Study_Destination/UK";
import Germany from "../Pages/Study_Destination/Germany";
import Study_Destination_Aus from "../Members/Sujit/Study_Destination_Aus";
import Australia from "../Pages/Study_Destination/Australia";

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
        element: <Blogs />,
      },
      {
        path: "/SingleBlogs",
        element: <Single_Blog />,
      },
      {
        path: "/SingleEvent",
        element: <Single_Event />,
      },

      {
        path: "/UK",
        element: <UK />,
      },
      {
        path: "/Australia",
        element: <Australia />,
      },
      {
        path: "/Germany",
        element: <Germany />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
    ],
  },
]);
