/*
==========================
FileName: Layout.jsx
Student : Martine Nforne
ID : 301485889
Date : February 2, 2024
==========================
*/
import {Link}  from "react-router-dom";
import './Layouts.css';
import q2logo from "../../assets/q2Logo.png";




export default function Layouts(){
  return(
    <>
    <div id="headerbar">
      <img src={q2logo} alt="../../assets/q2Logo.png" />

      <div>
        <div>
          <h1> Portfolio : Martin Nforne </h1> 

          <nav>            
            <div>
              <div><Link to="/">Home</Link> </div>
              <div>|   <Link to="/about">About Me</Link></div>
              <div>|   <Link to="/education">Education</Link>   </div>
              <div>|   <Link to="/projects">Projects</Link> </div>
              <div>|   <Link to="/services">Services</Link>   </div>
              <div>|   <Link to="/contact">Contact Me</Link> </div>  
              <div>|   <Link to="/column"><button>SWITCH</button></Link> </div>                      
            </div>
                
          </nav>
            <hr />

        </div>     
        

      </div>

    </div>
    
    
    </>
  );
}