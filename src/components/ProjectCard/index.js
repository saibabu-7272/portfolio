import { FaExternalLinkAlt } from "react-icons/fa";
import './index.css'

const ProjectCard = (props) => {
    const {project} = props
    return(
        
            <li className='project-card' style={{'background-image': `url(${project.projectUrl})`}}>
                <div className='project-links'>
                <a className='external-link' href={project.url} target="_blank" rel="noreferrer" ><p>Live Demo <span><FaExternalLinkAlt /></span></p></a>
                <a className='external-link' href={project.url} target="_blank" rel="noreferrer" ><p>GitHub <span><FaExternalLinkAlt /></span></p></a>
                </div>
                <p className='project-name' >{project.name}</p>
            </li>
        
    )
}

export default ProjectCard