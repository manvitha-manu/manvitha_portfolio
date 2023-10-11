import React from "react";
import './education.css';
import csu from '../../assets/csulblogo.png'
import reva from'../../assets/revalogo.png';


const Education=()=>{
    return(
        <section className="skills">
            <span className="skillTitle">What I do</span>
            <div>
            <span className="skillDesc">I'm a skilled Full Stack Developer with expertise in creating complete web solutions.
             My tech stack includes React.js for dynamic front-end development, Node.js for robust back-end functionality, and MongoDB for database management.
            I deploy applications on AWS, ensuring scalability and reliability. Proficient in Git and GitHub for version control.
            With Visual Studio Code as my primary development tool, I am committed to crafting responsive and efficient web applications that meet both user and business requirements.
             </span>
             </div>

            <span className="eduTitle">My Education</span>
            <div className="edudetails">
                <img src={csu} alt="csu" className="edulblogo" />
                <div className="eduBar">
               <h2>Master's in California State University Long Beach, USA </h2> 
                <p></p>              
               </div>
               </div>
               <div className="edudetails">
                <img src={reva} alt="reva" className="edulblogo" />
                <div className="eduBar">
               <h2>Bachelor's in Reva University Bengaluru, India </h2> 
               <p></p>
               </div>
               </div>

        </section>
    )
}
export default Education;