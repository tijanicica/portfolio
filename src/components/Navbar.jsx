import {NavLink} from "react-router";
import logo from "/src/assets/logo-removebg-preview.png";
import { Menu, X } from 'lucide-react';
import {useState} from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <nav className="flex flex-wrap items-center justify-between bg-navbar px-6 py-4 md:py-6 fixed top-0 w-full z-[1000] shadow-md">
            <div className="flex justify-between items-center w-full md:w-auto">
                <img src={logo} alt="Logo" className="h-[40px] md:h-[50px]" />

                <button
                    className="md:hidden text-[var(--default-font-color)] hover:text-[var(--font-hover)]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            <div className="hidden md:flex md:flex-row gap-6 text-center font-[350] no-underline">
                <NavLink to='/' className="hover:text-[var(--font-hover)]" style={{ fontFamily: "Montserrat" }}>Home</NavLink>
                <NavLink to='/about' className="hover:text-[var(--font-hover)]" style={{ fontFamily: "Montserrat" }}>About</NavLink>
                <NavLink to='/skills' className="hover:text-[var(--font-hover)]" style={{ fontFamily: "Montserrat" }}>Skills</NavLink>
                <NavLink to='/projects' className="hover:text-[var(--font-hover)]" style={{ fontFamily: "Montserrat" }}>Projects</NavLink>
                <NavLink to='/contacts' className="hover:text-[var(--font-hover)]" style={{ fontFamily: "Montserrat" }}>Contact</NavLink>
            </div>


            {isOpen && (
                <div
                    className="fixed inset-0 bg-opacity-30 z-[998]"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="flex flex-col fixed gap-4 top-0 right-0 h-[300px] w-[200px] bg-navbar shadow-lg p-6 text-center z-[999] transition-all duration-300 ease-in-out"
                         onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="mb-4 self-end text-[var(--default-font-color)] hover:text-[var(--font-hover)]"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={20} />
                        </button>

                    <NavLink to='/' className="hover:text-[var(--font-hover)]" onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to='/about' className="hover:text-[var(--font-hover)]" onClick={() => setIsOpen(false)}>About</NavLink>
                    <NavLink to='/skills' className="hover:text-[var(--font-hover)]" onClick={() => setIsOpen(false)}>Skills</NavLink>
                    <NavLink to='/projects' className="hover:text-[var(--font-hover)]" onClick={() => setIsOpen(false)}>Projects</NavLink>
                    <NavLink to='/contacts' className="hover:text-[var(--font-hover)]" onClick={() => setIsOpen(false)}>Contact</NavLink>
                </div>
                    </div>
            )}
        </nav>


    );
};
export default Navbar;