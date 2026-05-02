import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";


export default function AuthLayout(){

    const [isAuthenticated , setIsAuthenticated ] = useState<boolean | null>(null);

    useEffect( () => {
        if(typeof window){
            const token = localStorage.getItem('ACCESS_TOKEN') ;
            if(token) setIsAuthenticated(true);
            else setIsAuthenticated(false);
        }
    },[])

    if(isAuthenticated === null) return null;

    return isAuthenticated ? <Outlet/> : <Navigate to="/" replace/>
}