import GroupCard from "@/feature/Home/components/Group/GroupCard";
import PersonalCard from "@/feature/Home/components/Personal/PersonalCard";
import LinksComponent from "@/feature/Home/components/Links/LinkList";
import MessagePlatform from "@features/Home/components/Message/MessagePlatform";


export default function Home() {
    return <div className="grid grid-cols-[auto_1fr] grid-rows-1 h-full  ">
        <div className="w-[300px] flex flex-col gap-3 bg-white p-2 py-5 border-r border-gray-300 shadow-2xl" >
            <div className="tabs w-full">
                <LinksComponent/>
            </div>
            <div className="groups mb-3">
                <p className="text-gray-400">Groups</p>
                <div className="group-list mt-2">
                    <GroupCard />
                </div>
            </div>
            <div className="channels mb-3">
                <p className="text-gray-400">Open Channels</p>
                <div className="group-list mt-2">
                    <GroupCard />
                </div>
            </div>

            <div className="channels">
                <p className="text-gray-400">Personal</p>
                <div className="group-list mt-2">
                   <PersonalCard/>
                </div>
            </div>
        </div>
        <div className="mt-2 ">
            <MessagePlatform/>
        </div>
    </div>
}