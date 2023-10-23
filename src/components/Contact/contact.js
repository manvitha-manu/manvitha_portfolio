import React from "react";
import './contact.css';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';


const Contact = () => {
    return ( 
        <section id="contactPage">
            <h1 className="contactPageTitle">Contact Me</h1>
            <div className="contact">
            <span className="conactDesc">
                Please fill out the form below to discuss any work oppurtunities 
            </span>
            <form className="contactForm">
                <input type="text" className="name" placeholder="Enter your name"/>
                <input type="email" className="email" placeholder="Enter your email"/>
                <textarea className="msg" name="message"  cols="30" rows="10" placeholder="Your Message"></textarea>
                <button type= "submit" value='send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={linkedin} alt="LinkedIn" className="link" />
                    <img src={github} alt="GitHub" className="link" />
                </div>
            </form>
            </div>
        </section>
     );
}
 
export default Contact;