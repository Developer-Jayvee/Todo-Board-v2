import { Microphone, SendDiagonalSolid } from "iconoir-react";

export default function MessageFooter() {

    return <div className="border-t border-b border-gray-300 flex justify-between gap-4 items-center p-2 ">
            <div className="relative w-full">
                <Microphone className="absolute left-1 top-2 cursor-pointer"/>
                <input type="text" placeholder="Start conversation here..." className=" outline-0 border border-gray-300 py-2 px-2 pl-8 w-full rounded-full"/>
            </div>
            <div className="">
                <SendDiagonalSolid className="cursor-pointer"/>
            </div>
        </div>
}