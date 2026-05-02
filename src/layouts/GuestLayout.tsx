import type { UserInfoData } from "@/feature/Auth/types";
import { getRawUserInfo } from "@/util/util";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";


export default function GuestLayout(){
    const [isAlreadyAuthenticated , setAlreadyAuthenticated] = useState<boolean | null > (null);
    const [userInfo , setUserInfo] = useState<UserInfoData | null>(null);
    useEffect( () => {
        if(typeof window){
            const token = localStorage.getItem("ACCESS_TOKEN");
            setAlreadyAuthenticated(!!token)
            setUserInfo(getRawUserInfo())
        }
    },[])

    if(isAlreadyAuthenticated === null ) return null;
    return isAlreadyAuthenticated ? <Navigate to={`${userInfo?.first_name}`} replace/> : <Outlet/>
}