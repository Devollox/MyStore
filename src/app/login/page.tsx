import {Metadata} from "next";
import NotFound from "@/app/error/page";

import './login.sass'

export const metadata: Metadata = {
    title: 'Login Console',
}

export default function Login() {
    return (
        <NotFound />
    )
}