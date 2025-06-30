import React from 'react';

const HomeSection = ({ personal }) => {
    return (
        <section id="home" className="py-12 bg-white rounded-lg shadow-xl text-center flex flex-col items-center">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
                    <div className="flex-shrink-0 mb-6 md:mb-0">
                        <img
                            src={personal.profileImage}
                            alt="Aashish Sharma"
                            className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-blue-200"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/cccccc/333333?text=Photo'; }}
                        />
                    </div>
                    <div className="text-left">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Namaste! I'm Aashish Sharma</h2>
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                            A highly motivated and experienced Geomatics Engineer with a proven track record in Geographic Information Systems (GIS), Remote Sensing, and Spatial Data Management. I specialize in leveraging geospatial technologies for problem-solving, disaster preparedness, urban planning, and environmental management. My expertise extends to drone piloting, data analysis, and leading impactful projects across various sectors.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <a href={`mailto:${personal.email}`} className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                Email Me
                            </a>
                            <a href={`tel:${personal.mobile}`} className="flex items-center bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Call Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;