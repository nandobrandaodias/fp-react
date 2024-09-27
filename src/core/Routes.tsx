import { createBrowserRouter } from "react-router-dom";
import Login from "./modules/user/Login";
import Home from "./modules/home/Home";
import Admin from "./modules/admin/Admin";

export const router = createBrowserRouter([
    {
        path: '/home',
        element: <Home />,
        index: true
    },
    {
        path: '/admin',
        element: <Admin />
    },
    {
        path: '/login',
        element: <Login />
    }
])