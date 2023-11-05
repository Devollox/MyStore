import Image from 'next/image'
import './page.sass'
import './globals.css'
import Card from '../props/Card'


import Navbar from '../components/Navbar'
import Footer from "@/components/Footer";
import App from "@/components/App";

export default function Home() {
    return (
        <main>
            <Navbar />
            <App />
            <Footer />
        </main>
    )
}

