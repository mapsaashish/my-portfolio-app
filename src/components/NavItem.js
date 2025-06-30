import React from 'react';

const NavItem = ({ section, label, setActiveSection }) => (
    <button
        onClick={() => setActiveSection(section)}
        className="text-white hover:bg-white hover:text-blue-700 px-4 py-2 rounded-full transition duration-300 ease-in-out font-medium"
    >
        {label}
    </button>
);

export default NavItem;