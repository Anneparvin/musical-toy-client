import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../Home/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
        path: "/home",
        element: <Home></Home>  
        }
      ],
    },
    {
        path: "/*",
        element: <div><img className="w-full p-8" src="https://ibb.co/18V15mh" alt="404"/></div> 
      },

  ]);

  export default router;