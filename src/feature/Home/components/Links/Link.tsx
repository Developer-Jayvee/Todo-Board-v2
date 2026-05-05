import type { LinkInterface } from "./types";


export default function Link({
    name , isActive = false
} : LinkInterface) {
    const activeCSs = "text-blue-700 relative after:absolute after:content-[''] after:left-0 after:bottom-0 after:border after:w-full";
     
    return <li>
        <button className={`${isActive ? activeCSs : ''}  cursor-pointer`}>{name}</button>
    </li>
}