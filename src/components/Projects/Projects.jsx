/*
==========================
FileName: Projects.jsx
Student : Martine Nforne
ID : 301485889
Date : February 2, 2024
==========================
*/

import {Link}  from "react-router-dom";
import nforne from "../Home/nforne.jpg";
import right from "../Home/right.png";
import './Projects.css';

export default function Projects(){
  return(
    <div className="home">  
            <img src={nforne} id='projs_img' alt="../Home/nforne.jpg" />      
            <hr />
            <div>            
              <pre>              
              {`JUNIOR SOFTWARE DEVELOPER
DEVOPS | AGILE TRAINED | ANALYTICAL`}              
              </pre>            
            <div><Link to="/services"><img src={right} id='abt_rt' alt="../Home/right.png" /></Link><p>Services? 🧐</p></div>
            </div>
            <div id="projs_txt">
              <pre>{`PROJECTS`}</pre>
              <dl>
                <dt>Web Development: CSS, HTML, JavaScript</dt>
                <dd>
                  <p>•	Designed a responsive marketing website for an artist to showcase artworks and more for sale</p>
                  <p>•	Created a scrolling image gallery, contact form, and responsive-design for web and mobile browsing</p>
                  <p>•	Hand-coded all components, addressed compatibility issues and optimized performance for various browsers like Chrome, Firefox, Safari, and Edge - cross browser development.</p>
                </dd>
                <hr />
                <dt>Software Requirements Specification Document: Safe2Ship - Package Shipping App</dt>
                <dd>
                  <p>•	Collaborated in a team using Agile for the development of an SRS document (UML modeling diagrams, Gantt charts, requirements etc.) for a package shipping app that matches packages to available shipping options </p>
                  <p>•	Lead a project team of 4, assigning tasks, coordinating activities, performing project milestone tracking, checking the final project and submitting the deliverable as per requirements</p>
                </dd>
                <hr />
                <dt>Retail Database - SQL</dt>
                <dd><p>•	Co-developed a database that allows book store to store, update, retrieve and maintain inventory</p></dd>
              </dl>
              
            </div>
      </div>    
  );
}