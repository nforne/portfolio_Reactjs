import {Link}  from "react-router-dom";
import "./Layouts.css";



export default function Layouts(){
  return(
    <>
    
    <h1>Portfolio</h1>
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/education">Education</Link> | 
      <Link to="/projects">Projects</Link> | 
      <Link to="/services">Services</Link> | 
      <Link to="/contact">Contact</Link> 
    </nav>
    <br /><hr />
    
    </>
  );
}