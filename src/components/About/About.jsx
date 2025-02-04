import {Link}  from "react-router-dom";
import './About.css';
import nforne from "../Home/nforne.jpg";
import right from "../Home/right.png";

export default function About(){
  return (
    <div className="home">  
            <img src={nforne} id='abt_img' alt="../Home/nforne.jpg" />      
            <hr />
            <div>            
              <pre>              
              {`JUNIOR SOFTWARE DEVELOPER
DEVOPS | AGILE TRAINED | ANALYTICAL`}              
              </pre>            
            <div><Link to="/education"><img src={right} id='abt_rt' alt="../Home/right.png" /></Link><p>Education? 🧐</p></div>
            </div>
            <div id="abt_txt">
              <p>	Results-oriented student of Software Engineering Technology Advanced Diploma, with applied project experience in full-stack development, database management and quality assurance of applications </p>
              <p>	Proven acumen for STEM fields, with completion of a Bachelor of Science degree </p>
              <p>	Proven leadership acumen and a passion to apply it in a dynamic business environment. Excellent interpersonal and communication skills (verbal and written)</p>
              <p>	Self-driven, creative and analytical thinker, able to work in a fast-paced environment.</p>
              <p>	Strong MS Office skills – Word, Outlook, Excel, PowerPoint and Visio</p>
              <p>	Demonstrated skill in object-oriented programming, user-oriented design, and applying the SDLC</p>
              <p>	Skilled in problem-solving, troubleshooting and debugging, with attentiveness to logic and details </p>
              <p>	Bilingual in English and French; uses communication skills to collaborate with clients and colleagues</p>
              <p>	Effectively relays technical information and concepts to non-technical personnel, honed through teaching </p>
            </div>
      </div>    
  );
};

