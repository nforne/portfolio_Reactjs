import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./MainRouter.jsx";
import './App.css';


export default function App(){
  return(
    <>
   
    <Router>
      
      <MainRouter/>

    </Router>
    
    </>
    
  );
};
