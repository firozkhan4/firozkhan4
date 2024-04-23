import { useState } from 'react';
import SocialIcons from './SocialIcons';
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (

        <div className='w-full shadow-md bg-[--background-color]  fixed z-20'>
            <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center py-4'>
                    <h1 className='text-4xl flex items-center max-sm:text-2xl'>
                        <div className="first-letter:text-[--highlight-color] mr-1">Firoz</div>
                        <div className="first-letter:text-[--highlight-color]">Khan</div>
                    </h1>
                    <div className='flex items-center gap-5'>
                        <nav className={`hidden sm:flex space-x-6 ${showMenu ? 'flex' : 'hidden'}`}>
                            <ul className='flex space-x-6 '>
                                <li><a href="/" className='text-gray-400 hover'>Home</a></li>
                                <li><a href="/" className='text-gray-400 hover'>Projects</a></li>
                                <li><a href="/" className='text-gray-400 hover'>Blogs</a></li>
                                <li><a href="/" className='text-gray-400 hover'>Login</a></li>
                            </ul>
                        </nav>
                        <SocialIcons />
                        <div className='sm:hidden'>
                            <GiHamburgerMenu className='text-gray-100 cursor-pointer' onClick={() => {
                                setShowMenu(!showMenu)
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
