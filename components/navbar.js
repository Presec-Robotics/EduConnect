import { AiOutlineHome, AiFillHome } from 'react-icons/ai'
import { BsBook, BsFillBookFill } from 'react-icons/bs'
import { PiBooksLight, PiBooksFill } from 'react-icons/pi'
import { BsTrophy, BsTrophyFill } from 'react-icons/bs'

export default function Navbar() {
    return (
        <>
            <nav className="fixed bottom-0 w-full py-2 border-t-2 bg-white border-secondary-light shadow-md">
                <ul className="flex items-center justify-around list-none">
                    <li>
                        <AiOutlineHome className="w-6 h-6"/>
                    </li>
                    <li>
                        <BsBook className="w-6 h-6"/>
                    </li>
                    <li>
                        <PiBooksLight className="w-6 h-6"/>
                    </li>
                    <li>
                        <BsTrophy className="w-6 h-6"/>
                    </li>
                </ul>
            </nav>
        </>
    )
}
