
function ProjectCard(props) {

    // let techStack = props.data.techStack;
    return (
        <div className='bg-[#171F38] w-[30vw] p-5 flex flex-col gap-y-3 items-center max-sm:w-full rounded-lg overflow-hidden'>
            <div>
                <img src={"https://www.piyushgarg.dev/_next/image?url=%2Fimages%2Ftwitter-clone.jpg&w=384&q=75 "} alt="" />
            </div>
            <div>
                <h2 className="text-xl font-semibold">Full Stack Twitter Clone</h2>
                <h2 className="text-gray-400 mt-2">Build FullStack twitter clone using latest tech stack</h2>
                <div>
                    {/* {techStack.map((iteam, index) => {
                        return <span key={index} className='bg-gray-300 mx-3 p-2'>{iteam}</span>
                    })} */}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard