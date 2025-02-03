import {Link}  from "react-router-dom";
import './Layouts.css';
import q2logo from "../../assets/q2Logo.png";



export default function Layouts(){
  return(
    <>
    <div id="headerbar">
      <img src={q2logo} alt="../../assets/q2Logo.png" />

      <div>
        <h1>Portfolio</h1>      
        <nav>
            <Link to="/">Home</Link> 
          | <Link to="/about">About</Link>   
          | <Link to="/education">Education</Link>    
          | <Link to="/projects">Projects</Link>    
          | <Link to="/services">Services</Link>   
          | <Link to="/contact">Contact</Link> 
          <hr />
          <Link to="/column"><button>SWITCH VIEW [ SLIDE {"<"}=={">"} COLUMN ]</button></Link>          
          <hr />
        </nav>

      </div>

    </div>
    
    
    </>
  );
}