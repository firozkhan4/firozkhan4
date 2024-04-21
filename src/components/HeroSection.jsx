import profileImg from '../assets/profileImg.jpg'

function HeroSection() {

    return (
        <div className='w-full h-[80vh]'>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center max-md:flex-col-reverse h-full">
                <div className="flex flex-col justify-around h-2/4 w-4/5 max-sm:items-center">
                    <div className='max-sm:flex max-sm:text-lg text-xl'>
                        <h2 className="text-with-line w-20 text-[1.5rem] text-[--highlight-color] mb-6">
                            Hello
                        </h2>
                        <span className='max-sm:block hidden text-2xl mx-2 text-[--highlight-color]' >!</span>
                        <h2 className="text-[2.5rem] max-sm:text-2xl "> I'm Firoz Khan</h2>
                    </div>
                    <p className='text-gray-400 text-xl'>Fullstack Developer</p>
                    <p className='text-gray-400 max-sm:text-center max-sm:w-screen max-sm:p-5'>
                        Hi! there My name is Firoz Khan 👨‍💻 Passionate BCA student aspiring to be a successful software developer. Currently honing skills through study and hands-on projects. Enthusiastic about new technologies and eager to collaborate on impactful projects. Let's connect and develop together!
                    </p>

                    <a className='w-52 bg-[--highlight-color] p-3 font-semibold rounded-lg font-serif text-white-100 shadow-md shadow-red-300 hover:text-white-100' href='https://www.linkedin.com/in/firozkhan5/' target='_blank'>Connect on LinkedIn</a>
                </div>
                <div className='w-full h-full flex items-center justify-end max-sm:justify-center  '>
                    <img src={profileImg} alt="" className='rounded-full w-[25em] max-md:w-[13em] max-sm:my-10 ' />
                </div>
            </div>
        </div >
    )
}

export default HeroSection