/*
==========================
FileName: Home.jsx
Student : Martine Nforne
ID : 301485889
Date : February 2, 2024
==========================
*/

import {Link}  from "react-router-dom";
import './Home.css';
import nforne from "../../assets/nforne.jpg";
import right from "../../assets/right.png";
 
export default function Home(){
  return(
 
      <div className="home">
        <img src={nforne} alt="./nforne.jpg" />

        <hr />
        <div>
        
          <pre>
          <a href="https://cfg-j.s3.us-east-1.amazonaws.com/Martin+Nforne+_2025_Rz.pdf">🔆Resume...📝</a>
            {
`<script>
                     🌼 WELCOME TO MY PORTFOLIO ...!🤗

      const nforne = {
        
        code: [Javascript, Typescript, HTML, CSS, Ruby, Python, Java],

        tools: [React, Redux, Node, Storybook,
              Styled-Components, Jest, Docker, Kubernetes],

        architecture: ["microservices", "event-driven", 
                        "design system pattern"],
                        
        techCommunities: {"1": Lighthouse Labs,
                          "2": TorontoJS,
                          "3": Toronto Python },

        challenge: "I am always brewing with some code cook up."
                  "You're welcome to join the party!!!"

      }

</script>`
            }
            
        </pre>
        <div><Link to="/about"><img src={right} id='abt_rt' alt="../Home/right.png" /></Link><p>About me?🧐</p></div>
        </div>
      </div>    
   
  )
};


