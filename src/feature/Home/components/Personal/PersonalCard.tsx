
export default function PersonalCard() {

    return <div className="ml-4 flex  h-16 gap-7 cursor-pointer hover:bg-body p-2 rounded-2xl">
        <div className="images relative ">
            <div className="relative ">
                <div className=" w-10 rounded-full overflow-hidden">
                    <img src="https://ui-avatars.com/api/?name=Elon+Musk" className="object-cover w-full h-full" alt="Profile" />
                </div>
            </div>
        </div>
        <div className="grow">
            <div className="flex justify-between">
                <p className="text-lg ">Madelyca</p>
                <p className=" font-light text-gray-400 text-sm ">Yesterday</p>
            </div>
            <p className="font-light text-gray-400 text-sm">Carlo : hello everyone</p>
        </div>
    </div>
}