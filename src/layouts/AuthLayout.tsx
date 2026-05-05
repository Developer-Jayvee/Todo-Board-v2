import { initUserInfo } from "@/constant/initStates";
import type { UserInfoData } from "@/feature/Auth/types";
import { getRawUserInfo } from "@/util/util";
import { createContext, useEffect, useMemo, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import type { AuthMainContextInterface } from "./types";
import AsideBar from "@/components/layout/AsideBar";
import TopNav from "@/components/layout/TopNav";

export const UserInfoContext = createContext<UserInfoData>(initUserInfo);
export const AuthMainContext = createContext<AuthMainContextInterface>({
    isMenuActive: false,
    toggleMenu: () => false
});
export default function AuthLayout() {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [userInfoData, setUserInfoData] = useState<UserInfoData>(initUserInfo);
    useEffect(() => {
        if (typeof window) {
            const token = localStorage.getItem('ACCESS_TOKEN');
            const userData = getRawUserInfo();
            if (token) setIsAuthenticated(true);
            else setIsAuthenticated(false);
            if (userData) setUserInfoData(userData);

        }
    }, [])
    const [isMenuActive, setMenuActive] = useState<boolean>(false);
    const toggleMenu = () => setMenuActive(!isMenuActive);


    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                if (window.innerWidth <= 640) setMenuActive(false)

            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    const globalNavData = useMemo(() => ({
        isMenuActive,
        toggleMenu
    }), [isMenuActive])
    const userInfo = useMemo(() => userInfoData, [userInfoData])
    if (isAuthenticated === null) return null;
    if (!isAuthenticated) return <Navigate to="/" replace />

    return <UserInfoContext.Provider value={userInfo}>
        <AuthMainContext.Provider value={globalNavData}>
            <AsideBar />
            <TopNav />
        </AuthMainContext.Provider>
        <div className="pt-10 pl-15 w-full h-full">
            <Outlet />
        </div>
    </UserInfoContext.Provider>
}