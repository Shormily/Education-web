import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Home/Main/Main";
import Home from "../Home/Home";
import About from "../Home/About/About";
import Admission from "../Home/Admission/Admission";
import History from './../Home/About/History/History';
import Administrator from './../Home/About/Administrator/Administrator';
import Cafetria from "../Home/About/Cafetria/Cafetria";
import Campus from "../Home/About/Campus/Campus";
import OurTeacher from "../Home/About/OurTeacher/OurTeacher";
import Table from "../Home/Acamedic/Cource/Table";
import Calendar from "../Home/Acamedic/Calendar";
import News from "../Home/News/News";
import Newscards from "../Home/News/Newscards";
import Contact from "../Home/Contact/Cantact";
import Dashboard from "../Home/Dashboard/Dashboard";
import SignUP from "../Home/Authintication/SignUP";
import LogIn from "../Home/Authintication/LogIn";
import Dashcenter from "../Home/Dashboard/Dashcenter";
import Rechart from "../Home/Dashboard/Rechart";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element:<Home></Home>,  
        },
        {
          path: "/about",
          element:<About></About>,  
        },
        {
          path: "/admission",
          element:<Admission/>,  
        },
        {
          path: "/administrator",
          element:<Administrator/>,  
        },
        {
          path: "/cafetria",
          element:<Cafetria/>,  
        },
        {
          path: "/calendar",
          element:<Calendar/>,  
        },
        {
          path: "/campus",
          element:<Campus/>,  
        },
        {
          path: "/ourTeacher",
          element:<OurTeacher/>,  
        },
        {
          path: "/history",
          element:<History/>,  
        },
        {
          path: "/cource",
          element:<Table/>,  
        },
        {
          path: "/news",
          element:<News/>,  
        },
        {
          path: "/rechart",
          element:<Rechart/>,  
        },
        {
          path: "/newsCard",
          element:<Newscards/>,
          loader: () =>fetch("http://localhost:5000/totalProducts")  
        },
      
        {
          path: "/contact",
          element:<Contact/>,  
        },
        {
          path: "/signup",
          element:<SignUP/>,  
        },
        {
          path: "/login",
          element:<LogIn/>,  
        },
       
      ],
    },
    {
        path: '/dashboard',
        element: <Dashboard/>, 
        children:[
          {
          path: "/dashboard",
          element:<Dashcenter/>,
        },
        //   {
        //   path: "/dashboard/dashcenter",
        //   element:<Dashcenter/>,
        // },
      ]
    }
  ]);