import ProjectCard from '../components/ProjectCard'

function ProjectSection() {
    const data = {
        title: "Full Stack Twitter Clone",
        disc: "Build FullStack twitter clone using latest tech stack",
        techStack: ["HTML", "CSS", "JavaScript"],
    }
    return (
        <div className="w-full h-[50vh] mt-[5rem] max-sm:mt-[8rem]">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-with-line w-28 text-[1.5rem] text-[--highlight-color] mb-6">Projects</h3>
                <h3 className="text-2xl">Checkout My Porjects</h3>
                <div className='my-8'>
                    <ProjectCard data={data} />
                </div>
            </div>
        </div>
    )
}

export default ProjectSection