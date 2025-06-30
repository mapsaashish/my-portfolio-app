import React from 'react';

const AcademicSection = ({ academic }) => (
    <section id="academic" className="py-12 bg-gray-50 rounded-lg shadow-xl px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center border-b-2 border-blue-500 pb-2">Academic Qualification</h2>
            {academic.map((edu, index) => (
                <div key={index} className="bg-white p-8 mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-blue-700 mb-2">{edu.level}</h3>
                    <p className="text-gray-600 mb-1"><strong>Institute:</strong> {edu.institute}</p>
                    <p className="text-gray-600 mb-1"><strong>Duration:</strong> {edu.duration}</p>
                    <p className="text-gray-600 mb-4"><strong>Grade:</strong> {edu.grade}</p>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Subjects / Skills:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 list-disc list-inside text-gray-700">
                        {edu.skills.map((skill, i) => (
                            <li key={i} className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>
);

export default AcademicSection;