import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login/Login";
import SignUp from '../Login/SignUp/SignUp'
import ToyCards from "../Home/ToyCard/ToyCards";
import Blog from "../Blog/Blog";
import SingleToy from "../Home/ToyCategory/singleToy";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import AllToys from "../AllToys/AllToys";
import ToysService from "../ToysService/ToysService";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
        path: "/",
        element: <Home></Home>  
        },
        {
        path: "/login",
        element: <Login></Login>  
        },
        {
        path: "/signup",
        element: <SignUp></SignUp> 
        },
        {
        path: "/blog",
        element: <Blog></Blog> 
        },
        {
        path: "/toys",
        element: <ToyCards></ToyCards>
        },
        {
        path: "/toys/:_id",
        element:<SingleToy></SingleToy>,
        loader:async({params}) => fetch(`http://localhost:5000/toys/${params._id}`)
        },
        {
          path: "/alltoys",
          element: <AllToys></AllToys>
          },
        {
          path: "/allToys/:_id",
          element: <ToysService></ToysService>,
          loader:({params}) => fetch(`http://localhost:5000/toys/${params._id}`)
          },

      ]
    },
    {
        path: "/*",
        element: <div><img className="w-full h-96" src="https://i.ibb.co/yR7WMnq/error-404.jpg" alt="404"/></div> 
      },

  ]);

  export default router;