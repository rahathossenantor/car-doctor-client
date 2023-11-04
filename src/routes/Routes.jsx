import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AuthProvider from "../providers/AuthProvider";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import CheckOut from "../pages/CheckOut";
import Bookings from "../pages/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthProvider><App></App></AuthProvider>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader: ({params}) => fetch(`https://cardoctors-server.vercel.app/service/${params.id}`)
            },
            {
                path: "/bookings",
                element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
            }
        ]
    }
]);

export default router;
