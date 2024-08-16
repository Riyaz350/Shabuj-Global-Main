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
import UK from "../Pages/Study_Destination/UK";
import Germany from "../Pages/Study_Destination/Germany";
import Australia from "../Pages/Study_Destination/Australia";
import Single_University from "../Pages/Single_University/Single_University";
import Coming_Soon from "../Pages/Coming_Soon/Coming_Soon";
import Single_University_Ger from "../Components/Study_Destination_Components/Germany/Germany_Single_University/Single_University_Ger";
import Single_University_Aus from "../Components/Study_Destination_Components/Australia/Single_University_Aus";
import HomeSingleUniversity from "../Components/Home/HomeSingleUniversity/HomeSingleUniversity";
import Single_University_UK from "../Components/Study_Destination_Components/UK/Sing_University_UK";
import Registration_Page from "../Components/Registration_Components/Registration_Page";
import Switzerland from "../Pages/Study_Destination/Switzerland";
import France from "../Pages/Study_Destination/France";
import WestIndies from "../Pages/Study_Destination/WestIndies";
import UAE from "../Pages/Study_Destination/UAE";
import Georgia from "../Pages/Study_Destination/Georgia";


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
        path: "/UAE",
        element: <UAE />,
      },
      {
        path: "/Georgia",
        element: <Georgia />,
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
      {
        path: "/registration",
        element: <Registration_Page />,
      },
      {
        path: "/singleUniversityUK/:id",
        element: <Single_University_UK />,
      }, 
      {
        path: "/singleUniversityAUS/:id",
        element: <Single_University_Aus />,
      }, 
      {
        path: "/singleUniversityGER/:id",
        element: <Single_University_Ger />,
      }, 
      {
        path: "/comingSoon",
        element: <Coming_Soon/>,
      }, 
      {
        path: "/singleUniversityAll/:id",
        element: <HomeSingleUniversity/>
      },
      {
        path: "/Switzerland",
        element: <Switzerland />,
      },
      {
        path: "/France",
        element: <France />,
      },
      {
        path: "/West-Indies",
        element: <WestIndies />,
      },
    ],
  },
]);
