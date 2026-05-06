import Link from "@features/Home/components/Links/Link"


export default function LinksComponent() {

    return <ul className="flex justify-between text-sm">
        <Link name="All Conversation"/>
        <Link name="Groups"/>
        <Link name="Channels"/>
    </ul>

}