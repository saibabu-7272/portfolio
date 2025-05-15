import { TbCircleLetterG } from "react-icons/tb";
import {Link} from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";


import './index.css'

const Header = () => (
    <nav className='header'>
        <Link className='link' to="/" ><span className="website-title-container"><TbCircleLetterG className="website-icon" /><h1 className='website-name'>SAI BABU</h1></span></Link>
        <div className='tabs-container'>
            <Link className='link' to="/my-projects" ><p className='tab'>PROJECTS</p></Link>
            <Link className='link' to="/about" ><p className='tab'>ABOUT ME</p></Link>

        </div>
        <div className='icon-tabs-container tabs-container'>
            <Link className='link' to="/my-projects" ><GrProjects className="icon" /></Link>
            <Link className='link' to="/about" ><CgProfile className="icon" /></Link>

        </div> 
        
    </nav>
)
 
export default Header