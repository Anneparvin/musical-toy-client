import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login/Login";
import SignUp from '../Login/SignUp/SignUp'
import ToyCards from "../Home/ToyCard/ToyCards";
import ToyCategory from "../Home/ToyCategory/ToyCategory";

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
        path: "/toys",
        element: <ToyCards></ToyCards>
        },
        {
        path: "/toys/:toyId",
        element: <ToyCategory></ToyCategory>,
        loader:async({params}) => fetch(`http://localhost:5000/toys/${params.toyId}`)
        }

      ]
    },
    {
        path: "/*",
        element: <div><img className="w-full p-8" src="https://ibb.co/18V15mh" alt="404"/></div> 
      },

  ]);

  export default router;