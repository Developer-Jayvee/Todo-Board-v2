import SearchInput from "@/components/Input/SearchInput";
import type { TopNavInterface } from "@components/layout/types/TopNav";
import { Bell, Menu } from "iconoir-react";
import "@styles/TopNav.css";
import { useContext, useState } from "react";
import { AuthMainContext } from "@/layouts/AuthMainLayout";

export default function TopNav({
    customClass
} : TopNavInterface) {
    const { toggleMenu , isMenuActive } = useContext(AuthMainContext);
    return <header>
        <nav className={`${customClass} ${isMenuActive ? 'translate-x-15' : ' max-sm:left-0 left-15'} transition-all px-2  fixed top-0  h-12 bg-neutral flex justify-between left-0 right-0 items-center`}> 
            <div className="max-sm:flex gap-1 items-center">
                <Menu onClick={toggleMenu} className={`${isMenuActive ? 'active' : ''} cursor-pointer max-sm:inline hidden menu-bar `}/>    
                <SearchInput/>
            </div>
            <div className="flex items-center gap-2">
                <div>
                    <Bell/>
                </div>
                <div className="flex items-center">
                    <div className="overflow-hidden rounded-full w-9 h-9 z-2">
                        <img src="https://ui-avatars.com/api/?name=Elon+Musk" className="object-cover w-full h-full" alt="Profile"/>
                    </div>
                    <div className="cursor-pointer -ml-1.5 z-1 bg-gray-200 px-2 rounded-r-full">
                        <p>Elon Musk</p>
                    </div>
                </div>
            </div>
        </nav>
    </header>
}