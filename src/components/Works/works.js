import React from "react";
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';



const Works = () => {
    return ( 
       <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="workDesc">
            "As a passionate and results-oriented software engineer, I leverage my proficiency in Java, Javascript, and cloud technologies to craft secure and user-friendly applications. Having tackled diverse challenges from optimizing performance to automating workflows, 
            I thrive in collaborative environments and consistently strive for innovation.
            I am enthusiastic about applying my expertise and background to support companies in 
            reaching their objectives and establishing a robust online identity."
            </span>
            <div className="worksImg">
                <img src={Portfolio1} alt="" className="worksImg" />
                <img src={Portfolio2} alt="" className="worksImg" />
                <img src={Portfolio3} alt="" className="worksImg" />
            </div>
            <a href="https://drive.google.com/file/d/1e3078CCioodXDFT3Gvbq1ttuJQtLjcGv/view?usp=sharing" download="Manvitha's Resume.pdf" target="blank">
            <button className="worksBtn">Download Resume</button>
            </a>
       </section>

        
     );
}
 
export default Works ;