import MessageHeader from "./MessageHeader";
import MessageFooter from "./MessageFooter";
import ReplyMessage from "./SentMessage/ReplyMessage";
import PersonalMessage from "./SentMessage/PersonalMessage";


export default function MessagePlatform() {

    return <div className="flex flex-col bg-white h-full">
        <MessageHeader />
        <div className="grow h-full overflow-hidden py-4  flex flex-col justify-end">
            <div className="overflow-auto flex flex-col-reverse">
                <div className="flex flex-col gap-5 px-3">
                    <ReplyMessage />
                    <PersonalMessage/>
                    <ReplyMessage />
                </div>
            </div>
        </div>
        <MessageFooter />
    </div>
}