import React,{useRef} from "react";
import './contact.css';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nyn1e17', 'template_8djcz5w', form.current, 'TQDgR6xGthopy4UGpZR89')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent');
          }, (error) => {
              console.log(error.text);
          });
    };
    return ( 
        <section id="contactPage">
            <h1 className="contactPageTitle">Contact Me</h1>
            <div className="contact">
            <span className="conactDesc">
                Please fill out the form below to discuss any work oppurtunities 
            </span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Enter your name" name='from_name'/>
                <input type="email" className="email" placeholder="Enter your email" name='from_email'/>
                <textarea className="msg" name="message"  cols="30" rows="10" placeholder="Your Message"></textarea>
                <button type= "submit" value='send' className="submitBtn">Submit</button>
                <div className="links">
                <a href="https://www.linkedin.com/in/manvithagolla" target="_blank">
                    <img src={linkedin} alt="LinkedIn" className="link" />
                </a>
                <a href="https://github.com/manvitha-manu" target="_blank">
                  <img src={github} alt="GitHub" className="link" />
                </a>
                </div>
            </form>
            </div>
        </section>
     );
}
 
export default Contact;