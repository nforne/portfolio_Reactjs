import './Home.css';
import nforne from "./nforne.jpg";
 
export default function Home(){
  return(
 
      <div id='home'>
        <img src={nforne} alt="./nforne.jpg" />
        <hr />
        <div>
          <pre>
            {
`<script>
      const nforne = {
        
        code: [Javascript, Typescript, HTML, CSS, Ruby, Python, Java],

        tools: [React, Redux, Node, Storybook,
              Styled-Components, Jest, Docker, Kubernetes],

        architecture: ["microservices", "event-driven", 
                        "design system pattern"],
                        
        techCommunities: {
          "1": Lighthouse Labs,
          "2": TorontoJS,
          "3": Toronto Python
        },

      challenge: "I am always brewing with some code cook up."
                  "You're welcome to join the party!!!"

      }
</script>`
            }
        </pre>
        </div>
      </div>    
   
  )
};


