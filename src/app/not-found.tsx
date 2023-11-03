import './globals.css'
import './notFound.sass'

import page from './page'
export default function NotFound() {
    return (
        <main>
            <div className='notfound'>
                <div className='notfound-page'>
                    <a>404</a>
                    <a className='title-info'>Sorry, we were unable to find that page</a>
                    <a className='redirect'>Start from <a href='/' className='found-page'>home page</a></a>
                </div>
            </div>
        </main>
    )
}