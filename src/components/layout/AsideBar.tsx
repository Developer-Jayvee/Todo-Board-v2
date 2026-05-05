import { LogOut, MessageText } from "iconoir-react";
import type { AsideTypes } from "./types/AsideTypes";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthMainContext } from "@/layouts/AuthMainLayout";


export default function AsideBar({ customClass } : AsideTypes) {
    const { isMenuActive } = useContext(AuthMainContext);
    return <aside className={` ${customClass} ${isMenuActive ? 'translate-0 ': 'max-sm:-translate-full '} fixed w-15  bg-secondary flex flex-col text-white top-0 left-0 bottom-0 py-2`} >
        <div className="w-full  py-2 text-center">
            <h1>TL</h1>
        </div>
        <div className="grow my-2">
            <ul className=" w-full flex flex-col ">
                <li className="py-2 cursor-pointer hover:bg-primary w-full flex justify-center">
                    <Link to="/" replace className="">
                        <MessageText/>
                    </Link>
                </li>
            </ul>
        </div>
        <div>
            <button className=" w-full p-2 flex justify-center hover:bg-primary cursor-pointer">
                <LogOut/>
            </button>
        </div>
    </aside>
}