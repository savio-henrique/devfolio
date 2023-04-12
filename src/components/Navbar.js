import React from "react"; 
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="sticky top-0 left-0 h-16 bg-gradient-to-b from-ubuntu-grey to-black">
            <ul className="flex items-center mx-auto max-w-full space-x-10 place-content-center h-full">
                <li>
                    <NavLink exact="true" className="text-2xl text-slate-200" to="/jobs">Jobs</NavLink>
                </li>
                <li>
                    <NavLink exact="true" className="text-2xl text-slate-200" to="/curriculum">Curriculum</NavLink>
                </li>
                <li>
                    <NavLink exact="true" to="/"><Logo/></NavLink>
                </li>
                <li>
                    <NavLink exact="true" className="text-2xl text-slate-200" to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink exact="true" className="text-2xl text-slate-200" to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;