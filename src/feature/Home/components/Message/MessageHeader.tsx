import { MoreVert, Phone, VideoCamera } from "iconoir-react";


export default function MessageHeader() {

    return    <div className="border-b border-gray-300 flex justify-between p-2">
            <div className="message-info flex gap-1 items-cente">
                <div className="w-10 h-10 overflow-hidden rounded-full r">
                    <img src="https://ui-avatars.com/api/?name=Elon+Musk" className="object-cover w-full h-full" alt="Profile" />
                </div>
                <div>
                    <p className="text-lg">Group 1</p>
                    <p className="text-sm font-light text-gray-500">Active 7 mins ago</p>
                </div>
            </div>
            <div className="message-settings flex gap-2 items-center">
                <div className="bg-gray-300 rounded-full p-1 ">
                    <Phone/>
                </div>
                <div className="bg-gray-300 rounded-full p-1 ">

                    <VideoCamera/>
                </div>
                <div className="bg-gray-300 rounded-full p-1 ">
                    <MoreVert/>
                </div>
            </div>
        </div>
}