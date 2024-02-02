import React from "react";
import './education.css';
import csu from '../../assets/csulblogo.png'
import reva from'../../assets/revalogo.png';


const Education=()=>{
    return(
        <section className="skills">
            
            <span className="skillTitle">What I do</span>
            <div>
            <span className="skillDesc">
            Fueled by a deep passion for crafting software, I'm a versatile and results-oriented engineer who builds secure, performant applications that delight users. 
            With a firm grasp of both frontend and backend technologies (Java, Python, JavaScript, and cloud tools), I relish tackling diverse challenges and delivering impactful solutions.
            Optimizing performance, streamlining data access, and crafting engaging interfaces are all opportunities to explore, innovate, and push the boundaries of what's possible. 
            Whether collaborating across teams or automating tasks, I bring a collaborative spirit and unwavering dedication to efficiency and user-centricity. 
            Every project is a chance to express my passion for coding, leaving a positive impact on users and the software development landscape.
             </span>
             </div>

            <span className="eduTitle">My Education</span>
            <div className="edudetails">
                <img src={csu} alt="csu" className="edulblogo" />
                <div className="eduBar">
               <h2>Master's in California State University Long Beach, USA   </h2> 
               </div>
               </div>
               <div className="edudetails">
                <img src={reva} alt="reva" className="edulblogo" />
                <div className="eduBar">
               <h2>Bachelor's in Reva University Bengaluru, India</h2>
               </div>
               </div>
               
        </section>
    )
}
export default Education;