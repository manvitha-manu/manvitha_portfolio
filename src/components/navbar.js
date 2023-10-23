import React from "react";
import './navbar.css';
import logo from '../assets/logonobg.png';
import contactImg from '../assets/contact.png'
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
            <nav className="navbar">
                <img src={logo} alt="Logo" className="Logo"/>
                <div className="desktopMenu">
                    <Link activeClass= "active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                    <Link activeClass= "active" to="skills" spy={true} smooth={true} offset={-10} duration={500}className="desktopMenuListItem">About</Link>
                    <Link activeClass= "active" to="works" spy={true} smooth={true} offset={-80} duration={500}className="desktopMenuListItem">Portfolio</Link>
                    </div>          
            <button className="desktopMenuBtn" onClick={()=>{

                document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});
            }}>         
                    <img src={contactImg} alt=""className="desktopMenuImg"/>Contact Me              
            </button>
            </nav>
            
      );
}
 
export default Navbar;  