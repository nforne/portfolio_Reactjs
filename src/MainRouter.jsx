import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import Layouts from "./components/Layouts.jsx";
import Projects from "./components/Projects.jsx";



export default function MainRouter(){
  return(
    <>

      <Layouts/>

      <Routes>

          <Route exact path="/" element={ <Home/> }/>
          <Route exact path = "/about" element = {<About/>}/>
          <Route exact path = "/projects" element = {<Projects/>}/>
          <Route exact path = "/education" element = {<Education/>}/>
          <Route exact path = "/contact" element = {<Contact/>}/>

      </Routes>
      
    </>
  );
};
