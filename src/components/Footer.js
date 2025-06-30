import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6 text-center mt-10 rounded-t-lg shadow-inner">
            <div className="max-w-4xl mx-auto">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Aashish Sharma. All rights reserved.
                </p>
                <p className="text-xs mt-2">
                    Built with React and Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;