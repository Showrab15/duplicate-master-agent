import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import MasterAgent from "../pages/MasterAgent";
import Home from "../pages/Home";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
    
      {
        path: 'master-agent',
        element: <MasterAgent/>
      },

    ]
  },
 
]);
