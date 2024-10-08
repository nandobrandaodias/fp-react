import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "./modules/user/Login";
import Home from "./modules/home/Home";
import Admin from "./modules/admin/Admin";
import HomePage from "./modules/home/HomePage/HomePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children:[
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/profile',
                element: <Admin />,
            }
        ]
    },
    {
        path: '/admin',
        element: <Admin />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: "*",
        loader: () => redirect("/")
    }
])