import {Metadata} from "next";
import NotFound from "@/app/error/page";

export const metadata: Metadata = {
    title: 'Login Console',
}

export default function Login() {
    return (
        <NotFound />
    )
}