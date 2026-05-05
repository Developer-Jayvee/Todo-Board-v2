import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/feature/Auth/LoginPage";
import RegisterPage from "@/feature/Auth/RegisterPage";
import GuestLayout from "@/layouts/GuestLayout";
import AuthLayout from "@/layouts/AuthLayout";
import AuthMainLayout from "@/layouts/AuthMainLayout";

export const routers = createBrowserRouter([
    {
        path:"/",
        element:<GuestLayout/>,
        children:[
            {
                index:true,
                element : <LoginPage />
            },
            {
                path:"/register",
                element:<RegisterPage/>
            }
        ]
    },
    {
        path:'/:user',
        element:<AuthLayout/>,
        children:[
            {
                index:true,
                element: <AuthMainLayout/>
            }
        ]
    }
])