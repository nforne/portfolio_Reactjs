/*
==========================
FileName: Education.jsx
Student : Martine Nforne
ID : 301485889
Date : February 2, 2024
==========================
*/
import {Link}  from "react-router-dom";
import nforne from "../Home/nforne.jpg";
import right from "../Home/right.png";
import './Education.css';

export default function Education(){
  return(
    <div className="home">  
            <img src={nforne} id='ed_img' alt="../Home/nforne.jpg" />      
            <hr />
            <div>            
              <pre>              
              {`JUNIOR SOFTWARE DEVELOPER
DEVOPS | AGILE TRAINED | ANALYTICAL`}              
              </pre>            
            <div><Link to="/projects"><img src={right} id='abt_rt' alt="../Home/right.png" /></Link><p>Projects? 🧐</p></div>
            </div>
            <div id="ed_txt_a">
              <pre>{`TECHNICAL SKILLS`}</pre>
              <dl>
                <dt>Programming:</dt>
                <dd>Java, SQL, NoSQL, C#, JavaScript, HTML/CSS, Python</dd>
                <hr />
                <dt>Frameworks & Libraries: </dt>
                <dd>React, Express, .Net, Node.js, Django </dd>
                <hr />
                <dt>Operating Systems: </dt>
                <dd>Unix, Linux, Windows</dd>
                <hr />
                <dt>Development Tools: </dt>
                <dd>Git, Visual Studio Code (1.96.2), Visual Studio (22), IntelliJ, PyCharm (2024.3.1.1) </dd>
                <hr />
                <dt>Cloud Computing: </dt>
                <dd>Amazon Web Services (AWS) </dd>
                <hr />
                <dt>Testing: </dt>
                <dd>Jest, Capybara, Mocha and Chai, Cypress, Postman</dd>
                <hr />
                <dt>Other Tools: </dt>
                <dd>Jira, Trello, MS Office, Canva, terraform, CloudFormation</dd>
              </dl>
            </div>
            <div id="ed_txt_b">
              <pre>{`EDUCATION`}</pre>
              <dl>
              
                <dt>Software Engineering Technology (Co-op) Advanced Diploma         [Sept. 2024 - Present] </dt>
                <dd>
                  <p>Centennial College, Toronto, ON                 [ GPA: 4.1/4.5 (A) ]</p>
                  <p>•	Key Courses: QA & Testing | Java Programming | Web Interface Design | Software Requirements |
                      Database Concepts (SQL) | Web Development | Mobile Development | C#, Java Programming </p>
                </dd>
                <hr />
                <dt>Bachelor of Science - Physics 							      [Sept. 2014 - Aug. 2017]</dt>
                <dd>University of Bamenda, Cameroon </dd>
                <hr />
                <dt>Secondary School Teacher Diploma (DIPES I)  			[Sept. 2007 - Aug. 2011]</dt>
                <dd>University of Bamenda, Cameroon </dd>
              </dl>
            </div>
            <div id="ed_txt_c">
              <pre>{`PROFESSIONAL DEVELOPMENT`}</pre>
             
              <table>
              <hr />
                <tbody>
                  <tr>
                    <td><a href="https://www.mygreatlearning.com/certificate/NQWEXAJH">Data Science And ML: Making Data-Driven Decisions</a> | MIT IDSS (Online)</td>
                    <td>Sept. 2024</td>
                  </tr>
                  <tr>
                    <td><a href="https://coursera.org/verify/6ZTYUFP7PHAP">Agile with Atlassian Jira </a> | Coursera (Online)                               </td>
                    <td>Dec. 2022</td>
                  </tr>
                  <tr>
                    <td><a href="https://www.credly.com/badges/7b7dfde2-d1e1-4f03-9af4-071d22d251c2">Google Data Analytics Professional Certificate</a> | Coursera (Online)       </td>
                    <td>Nov. 2022</td>
                  </tr>
                  <tr>
                    <td><a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/XS83DB3DF2EE1N59">AWS Certified DevOps Engineer – Professional</a> | AWS, JJTech.Inc, USA (Online) </td>
                    <td>May 2022</td>
                  </tr>
                  <tr>
                    <td>Web Development Bootcamp | <a href="https://www.lighthouselabs.ca/en">Lighthouselabs</a> (Online)</td>
                    <td>Jan. 2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="ed_txt_d">
              <pre>{`WORK EXPERIENCE`}</pre>
              <dl>
                
                <dt>Sortation Associate           &nbsp;&nbsp;&nbsp;&nbsp;                 Jun. 2023 - Present</dt>
                <hr />
                <dd>
                  <p>Amazon Canada Fulfillment Services, Mississauga, ON      </p>
                  <p>•	Receive and process packages, sort and stage them in time for delivery drivers, working within a fast paced, high-volume and accuracy-oriented environment</p>
                  <p>•	Maintain an organized and safe work environment at all times, adhering to all health & safety protocols</p>
                </dd>
                
                <dt>Teacher - High School Mathematics, Physics and Computer Science           &nbsp;&nbsp;            Sept. 2011 - Nov 2018</dt>
                <hr />
                <dd>
                  <p>Ministry of Secondary Education (MINESEC), Cameroon</p>
                  <p>•	Collaborated with other members of staff to develop STEM curricula, to provide current, relevant,  industry-related and engaging curriculum for high school students </p>
                  <p>•	Provide classroom instruction and one-on-one support, ensuring a safe, inclusive and student-centered learning experience for diverse secondary students </p>
                  <p>•	Administer assignments and assessments, offering feedback and providing grading report cards </p>
                </dd>

              </dl>
              
            </div>
      </div>    
  );
};