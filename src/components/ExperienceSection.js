import React from 'react';

const ExperienceSection = ({ experience }) => (
    <section id="experience" className="py-12 bg-white rounded-lg shadow-xl px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center border-b-2 border-blue-500 pb-2">Professional Experience</h2>
            <div className="relative border-l-4 border-blue-500 ml-4 md:ml-8">
                {experience.map((exp, index) => (
                    <div key={index} className="mb-10 ml-6 relative">
                        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-1.5 border-2 border-white shadow-md"></div>
                        <h3 className="text-2xl font-bold text-blue-700 mb-1">{exp.title}</h3>
                        <p className="text-gray-800 font-semibold mb-1">{exp.institution}</p>
                        <p className="text-gray-600 text-sm mb-2">{exp.date}</p>
                        <p className="text-gray-600 mb-4">Supervisor: {exp.supervisor}</p>
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {exp.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                            ))}
                        </ul>
                        {exp.sampleWorks && exp.sampleWorks.length > 0 && (
                            <div className="mt-4">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Sample Works:</h4>
                                <div className="flex flex-wrap gap-3">
                                    {exp.sampleWorks.map((work, i) => (
                                        <a key={i} href={work.link} target="_blank" rel="noopener noreferrer" className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-blue-200 transition duration-300">
                                            {work.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ExperienceSection;