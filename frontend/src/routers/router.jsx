import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginSignUp from "../components/LoginSignUp"; 
import Home from "../pages/Home";
import DubaiTour from "../pages/DubaiTour";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children: [
      { path:'/', element:<Home/> },
      {path:'/destination/dubai', element:<DubaiTour/>},

    ],
  },
  {
    path: "/login",
    element: <LoginSignUp/>, 
  },
]);

export default router;
