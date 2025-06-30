import React from 'react';
import NavItem from './NavItem'; // Import the NavItem component

const Navbar = ({ setActiveSection }) => {
    return (
        <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-lg rounded-b-lg">
            <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center">
                <h1 className="text-white text-2xl font-bold mb-2 md:mb-0">Aashish Sharma</h1>
                <div className="flex flex-wrap space-x-4">
                    <NavItem section="home" label="Home" setActiveSection={setActiveSection} />
                    <NavItem section="academic" label="Education" setActiveSection={setActiveSection} />
                    <NavItem section="experience" label="Experience" setActiveSection={setActiveSection} />
                    <NavItem section="skills" label="Skills" setActiveSection={setActiveSection} />
                    <NavItem section="trainings" label="Trainings" setActiveSection={setActiveSection} />
                    <NavItem section="sample-works" label="Sample Works" setActiveSection={setActiveSection} />
                    <NavItem section="contact" label="Contact" setActiveSection={setActiveSection} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;