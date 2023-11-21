import Image from 'next/image'
import './page.sass'
import './globals.css'
import Card from '../props/Card'


import Navbar from '../components/Navbar'
import Footer from "@/components/Footer";
import App from "@/components/App";

export default function Home() {
    return (
        <main className='main'>
            <div className='html'>
                <Navbar />
                <App />
                <Footer />
            </div>
        </main>
    )
}

