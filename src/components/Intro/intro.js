import React from "react";
import'./intro.css';
import bg from'../../assets/nobg.png';
import { Link } from "react-scroll";
import btnImg from '../../assets/hireme.png'

const Intro=()=>{
    return (
        <section id="intro">
            <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm<span className="introName"> Manvitha Golla</span></span>
            <p className="introPara">Full-Stack Web Developer <br/>with 3+ years of experience.</p>
            <Link activeClass= "active" to="contactPage" spy={true} smooth={true} offset={-80} duration={500}><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg" />Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;