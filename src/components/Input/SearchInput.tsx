import { Search } from "iconoir-react";
import type { SearchInputTypes } from "@/components/Input/types";


export default function SearchInput({ customClass } : SearchInputTypes) {

    return <div className={`${customClass} relative flex gap-2 `}>
        <Search className="absolute top-[5.2px]"/>
        <input type="search" placeholder="Search here..." className="border py-1 px-7 border-0 outline-0"/>
    </div>
}