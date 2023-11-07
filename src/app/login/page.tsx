import {Metadata} from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Login Console',

}


export default function Login() {
    return (
        <Navbar />
    )
}