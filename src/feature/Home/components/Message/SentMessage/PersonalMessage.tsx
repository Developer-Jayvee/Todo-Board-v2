import { Check } from "iconoir-react";


export default function PersonalMessage() {

    return  <div className="flex justify-end w-full ">
        <div className="w-[50vw] flex flex-col items-end relative  ">
            <div className="flex flex-col items-end mr-13">
                <div className=" text-right  my-1 bg-gray-200 rounded-l-2xl rounded-t-2xl p-3 ">
                    <span className="font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat qui quia id iste at, pariatur eos doloremque repellendus aperiam voluptas hic voluptates consequatur ratione esse a cum facilis, inventore rem!</span>
                </div>
                <div>
                    <p className="flex gap-1 items-center text-gray-500 text-sm">
                        <Check />Sent
                    </p>
                </div>
            </div>
            <div className="overflow-hidden h-10 rounded-full absolute">
                <img src="https://ui-avatars.com/api/?name=Elon+Musk" className="object-cover w-full h-full" alt="Profile" />

            </div>
        </div>
    </div>
}