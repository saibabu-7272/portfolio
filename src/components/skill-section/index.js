
import { SiReact, SiMongodb, SiCanva, SiPicsart,SiExpress,SiMysql   } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap, FaNode, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";


import './index.css'

const SkillSection = () =>(
    <section>
        
        <h3>FRONT-END SKILLS:</h3>
        <ul className='unorder-container'>
        <li className='skill-card'><SiReact className="skill-icon" /><p className='skill-title'>REACT</p></li>
        <li className='skill-card'><TiHtml5 className="skill-icon" /><p className='skill-title'>HTML</p></li>
        <li className='skill-card'><IoLogoCss3 className="skill-icon" /><p className='skill-title'>CSS</p></li>
        <li className='skill-card'><FaBootstrap className="skill-icon" /><p className='skill-title'>BOOTSTRAP</p></li>
        </ul>

        <h3>BACK-END SKILLS:</h3>
        <ul className='unorder-container'>
        <li className='skill-card'><FaNode className="skill-icon" /><p className='skill-title'>NODE JS</p></li>
        <li className='skill-card'><SiExpress className="skill-icon" /><p className='skill-title'>EXPRESS JS</p></li>
        </ul>

        <h3>PROGRAMMING LANGUAGES:</h3>
        <ul className='unorder-container'>
        <li className='skill-card'><IoLogoJavascript className="skill-icon" /><p className='skill-title'>JAVASCRIPT</p></li>
        <li className='skill-card'><FaPython className="skill-icon" /><p className='skill-title'>PYTHON</p></li>
        </ul>

        <h3>DATABASES:</h3>
        <ul className='unorder-container'>
        <li className='skill-card'><SiMysql  className="skill-icon"/><p className='skill-title'>SQL</p></li>
        <li className='skill-card'><SiMongodb className="skill-icon" /><p className='skill-title'>MongoDB</p></li>
        </ul>

        <h3>OTHER SKILLS:</h3>
        <ul className='unorder-container'>
        <li className='skill-card'><FaGitAlt className="skill-icon" /><p className='skill-title'>GIT</p></li>
        <li className='skill-card'><FaGithub className="skill-icon" /><p className='skill-title'>GITHUB</p></li>
        </ul>
        <h3>DESIGN TOOLS:</h3>
        <ul className='unorder-container'>
        <li className='skill-card'><VscVscodeInsiders className="skill-icon" /><p className='skill-title'>VS CODE</p></li>
        <li className='skill-card'><SiCanva className="skill-icon" /><p className='skill-title'>CANVA</p></li>
        <li className='skill-card'><SiPicsart className="skill-icon" /><p className='skill-title'>PICSART</p></li>
        </ul>
    </section>
)

export default SkillSection