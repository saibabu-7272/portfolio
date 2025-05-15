import {Link} from 'react-router-dom'
import { FaLinkedin ,FaGithub,FaWhatsapp} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import './index.css'

const Footer = () => (
    <footer className='footer'>
        <div className='contact-section'>
            <ul className='social-links'>
                <li>
                    <a target='_blank' className='link social-name' href="https://saibabu61242@gmail.com"><IoMdMail className='social-icon' /> Gmail</a>
                </li>
                <li>
                    <a target='_blank' className='link social-name' href="https://github.com/saibabu-7272"><FaGithub className='social-icon' /> GitHub</a>
                </li>
                <li>
                    <a target='_blank' className='link social-name' href="https://www.linkedin.com/in/g-sai-babu-222066268/"><FaLinkedin className='social-icon' /> LinkedIn</a>
                </li>
                <li>
                    <a target='_blank' className='link social-name' href="#"><FaWhatsapp className='social-icon' /> 9010415625</a>
                </li>
        
            </ul>
            <section className='address-section'>
                <li>ADDRESS</li>
                <li>H.NO 1-146</li>
                <li>Ganapavaram</li>
                <li>Kukunnor</li>
                <li>Eluru District</li>
                <li>Andhra Pradesh</li>
                <li>India</li>
            </section>
        </div>
        <br/>
        <p className='footer-text'>Developed by @saibabu</p>
        
        
    </footer>
)

export default Footer