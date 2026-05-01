import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../feature/Auth/LoginPage";
import RegisterPage from "@/feature/Auth/RegisterPage";

export const routers = createBrowserRouter([
    {
        path:"/",
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
    }
])