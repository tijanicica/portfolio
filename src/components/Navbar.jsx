import {NavLink} from "react-router";
import logo from "/src/assets/logo-removebg-preview.png";

const Navbar = () => {

    return (

        <nav className="flex items-center justify-between bg-accent px-6 py-6 fixed top-0 w-full z-[1000] shadow-md">
            <div className="flex items-center">
                <img src={logo} alt="Logo"  className="h-[50px]" />
            </div>

            <div className="flex gap-6 mr-20 font-[350] text-textMain no-underline hover:text-textHover">
                <NavLink to='/' >Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contacts">Contact</NavLink>
            </div>

        </nav>
    );
};
export default Navbar;