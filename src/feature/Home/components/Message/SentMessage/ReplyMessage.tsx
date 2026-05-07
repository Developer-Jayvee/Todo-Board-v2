import { Check } from "iconoir-react";

export default function ReplyMessage() {

  

    return <div className="flex  w-full ">
        <div className="w-[50vw] flex flex-col items-end relative  ">
            <div className="flex flex-col  ml-13">
                <div className=" text-left  my-1 bg-secondary text-white rounded-t-2xl rounded-r-2xl p-3 ">
                    <span className="font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat qui quia id iste at, pariatur eos doloremque repellendus aperiam voluptas hic voluptates consequatur ratione esse a cum facilis, inventore rem!</span>
                </div>
                <div>
                    <p className="flex gap-1 items-center text-gray-500 text-sm">
                        <Check />Sent
                    </p>
                </div>
            </div>
            <div className="overflow-hidden left-0 h-10 rounded-full absolute">
                <img src="https://ui-avatars.com/api/?name=Elon+Musk" className="object-cover w-full h-full" alt="Profile" />

            </div>
        </div>
    </div>
}