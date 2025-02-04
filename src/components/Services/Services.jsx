import {Link}  from "react-router-dom";
import nforne from "../Home/nforne.jpg";
import right from "../Home/right.png";
import './Services.css';

export default function Services(){
  return(
    <div className="home">  
            <img src={nforne} id='svs_img' alt="../Home/nforne.jpg" />      
            <hr />
            <div>            
              <pre>              
              {`JUNIOR SOFTWARE DEVELOPER
DEVOPS | AGILE TRAINED | ANALYTICAL`}              
              </pre>            
            <div><Link to="/contact"><img src={right} id='abt_rt' alt="../Home/right.png" /></Link><p>Contact Me? 🧐</p></div>
            </div>
            <div id="svs_txt">
              <pre>{`SERVICES`}</pre>
              
              <ul>
              <hr />
                <li>Software Engineer - Full Stack [Web, Mobile]</li>
                <li>Cloud Engineer and Architect [AWS]</li>
                <li>Software Testing [QA, QC]</li>
                <li>Data Analyst and AI</li>
                <li>DevOps Engineer</li>
              </ul>              
            </div>
      </div> 
  );
};