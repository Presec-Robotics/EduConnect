import Navbar from '../components/navbar'
import Statsbar from '../components/statsbar'
import './globals.css'

export const metadata = {
    title: 'Learn Anything Quickly And Fun',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="h-screen w-screen bg-primary-light">
                <Statsbar/>
                <Navbar/>
                <div className="container pt-14">
                    { children }
                </div>
            </body>
        </html>
    )
}
