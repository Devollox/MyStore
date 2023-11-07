import {Metadata} from "next";
import NotFound from "@/app/error/page";
export const metadata: Metadata = {
    title: 'Signup Console',
}

export default function Signup() {
    return (
        <NotFound />
    )
}