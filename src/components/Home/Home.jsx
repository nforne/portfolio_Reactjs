import {Link}  from "react-router-dom";
import './Home.css';
import nforne from "./nforne.jpg";
import right from "./right.png";
 
export default function Home(){
  return(
 
      <div id='home'>
        <img src={nforne} alt="./nforne.jpg" />
        <hr />
        <div>
        
          <pre>
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


