import AsideBar from "@/components/layout/AsideBar";
import TopNav from "@/components/layout/TopNav";
import { createContext, useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import type { AuthMainContextInterface } from "./types";

export const AuthMainContext = createContext<AuthMainContextInterface>({
    isMenuActive : false,
    toggleMenu : () => false
});
const AuthMainLayout = () => {
    const [isMenuActive , setMenuActive] = useState<boolean>(false);
    const toggleMenu = () => setMenuActive(!isMenuActive);


    useEffect( () => {
        const handleResize = () => {
            if(typeof window !== "undefined"){
                if(window.innerWidth <= 640) setMenuActive(false) 
                
            }
        }

        window.addEventListener("resize",handleResize);

        return () => {
            window.removeEventListener("resize",handleResize);
        }
    } , [])

    const globalNavData = useMemo(() => ({
        isMenuActive,
        toggleMenu
    }),[isMenuActive])



    return <>
        <AuthMainContext.Provider value={globalNavData}>
            <AsideBar/>
            <TopNav/>
        </AuthMainContext.Provider>
        <div className="">
            <Outlet/>
        </div>
    </>
}

export default AuthMainLayout;