import { initUserInfo } from "@/constant/initStates";
import type { UserInfoData } from "@/feature/Auth/types";
import { getRawUserInfo } from "@/util/util";
import { createContext, useEffect, useMemo, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const UserInfoContext = createContext<UserInfoData>(initUserInfo);
export default function AuthLayout(){

    const [isAuthenticated , setIsAuthenticated ] = useState<boolean | null>(null);
    const [userInfoData,setUserInfoData] = useState<UserInfoData>(initUserInfo);
    useEffect( () => {
        if(typeof window){
            const token = localStorage.getItem('ACCESS_TOKEN') ;
            const userData = getRawUserInfo();
            if(token) setIsAuthenticated(true);
            else setIsAuthenticated(false);
            if(userData) setUserInfoData(userData);

        }
    },[])

    const userInfo = useMemo( () => userInfoData,[userInfoData])
    if(isAuthenticated === null) return null;
    if(!isAuthenticated) return <Navigate to="/" replace/>
    
    return <UserInfoContext.Provider value={userInfo}>
        <Outlet/>
    </UserInfoContext.Provider>
}