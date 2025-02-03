import "./Column.css";
import About from "../About/About";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";

export default function Column(){
  return(
    <>
    <About></About>
    <Education></Education>
    <Projects></Projects>
    <Services></Services>
    <Contact></Contact>
    </>
  );
}