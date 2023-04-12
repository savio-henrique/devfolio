import React from "react"; 
import Home from "./Home";
import About from "./About";
import Jobs from "./Jobs";
import Curriculum from "./Curriculum";
import Contact from "./Contact";
import { Routes ,Route } from "react-router-dom";


const Main = (props) => {
    return( 
        <Routes>
            <Route exact path="/" element={<Home jobs={props.jobs}/>} />
            <Route exact path="/jobs" element={<Jobs jobs={props.jobs}/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/curriculum" element={<Curriculum/>} />
            <Route exact path="/about" element={<About/>} />
        </Routes>
    );
};

export default Main;