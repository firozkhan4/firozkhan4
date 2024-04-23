import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import SocialIcons from './SocialIcons';

function Footer() {
    return (
        <div className='w-full relative'>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex max-md:flex-col h-full">
                <div className='w-2/4 h-full py-4 flex flex-col gap-y-6 max-sm:w-full'>
                    <h3 className='text-2xl max-sm:w-auto text-[--highlight-color]'>Contact With Me</h3>
                    <ul className='grid gap-3'>
                        <li className='flex items-center gap-3'>
                            <FaLocationDot className='text-[--highlight-color]' />
                            <p>Kota, Rajasthan</p>
                        </li>
                        <li className='flex items-center gap-3'>
                            <MdEmail className='text-[--highlight-color]' />
                            <p>work.firozkhan1@gmail.com</p>
                        </li>
                    </ul>
                    <SocialIcons />
                </div>
                <div className='w-2/4 h-full max-sm:w-full grid gap-3 max-sm:mt-8'>
                    <h3 className='text-2xl max-sm:w-auto text-[--highlight-color]'>Contact Me</h3>
                    <form action="" className='flex flex-col w-full gap-3'>
                        <input type="text" name="name" placeholder='Full Name' className='input-box' />
                        <input type="email" name="email" placeholder='Email' className='input-box' />
                        <textarea name="comment" cols="30" rows="7" placeholder='Message' className='input-box resize-none'></textarea>
                        <input type="submit" value="Send message" className='bg-blue-500 p-3 text-xl rounded-md' />
                    </form>
                </div>
            </div>
            <div className='text-sm w-full p-5 flex justify-center max-sm:text-[11.5px]'>
                <p >Copyright2024. Developed by Firoz Khan. All right reserved.</p>
            </div>
        </div>
    )
}

export default Footer