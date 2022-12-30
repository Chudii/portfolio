import '../styles/projects.css'
import Project from './project'

const Projects = () => {

    return (
        <div className='projects'>
            <h1>Projects</h1>
            <div className='project-list'>
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}

export default Projects