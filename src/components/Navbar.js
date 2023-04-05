import React from "react"; 
import Logo from "./Logo";

const Navbar = () => {
    return(
        <nav className="sticky top-0 left-0 flex items-center mx-auto max-w-full space-x-10 place-content-center h-16 bg-gradient-to-b from-ubuntu-grey to-black">
            <a href="#" className="text-2xl text-slate-200">Jobs</a>
            <a href="#" className="text-2xl text-slate-200">Curriculum</a>
            <Logo/>
            <a href="#" className="text-2xl text-slate-200">About</a>
            <a href="#" className="text-2xl text-slate-200">Contact</a>
        </nav>
    );
};

export default Navbar;