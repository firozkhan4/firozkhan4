import React from "react"

function ProjectCard(props) {



    return (

        <div className='bg-[#171F38] w-[26vw] h-[25em] p-5 flex flex-col gap-y-3  max-sm:w-full rounded-lg overflow-hidden max-sm:h-[25em] hover:scale-105'>
            <div className="mx-auto">
                <img src={"https://www.piyushgarg.dev/_next/image?url=%2Fimages%2Ftwitter-clone.jpg&w=384&q=75 "} alt="" />
            </div>
            <div className="h-[50%] grid">
                <h2 className="text-xl font-semibold">{props.item.title}</h2>
                <h2 className="text-gray-400">{props.item.disc}</h2>
            </div>
            <div className=" flex gap-3 text-sm ">
                {props.item.techStack.map((tech, index) => {
                    return <span key={index} className='bg-gray-600 p-2 rounded-xl'>{tech}</span>
                })}
            </div>
        </div>

    )
}

export default ProjectCard