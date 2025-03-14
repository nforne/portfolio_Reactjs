import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx";
import Education from "./components/Education/Education.jsx";
import Layouts from "./components/Layouts/Layouts.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Services from "./components/Services/Services.jsx";
import Column from "./components/column/Column.jsx";



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
          <Route exact path = "/services" element = {<Services/>}/>
          <Route exact path = "/column" element = {<Column/>}/>

      </Routes>
      
    </>
  );
};
