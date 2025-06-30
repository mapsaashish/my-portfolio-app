import React, { useState, useEffect } from 'react';
// Assuming `profileData` is imported in `App.js` and passed as a prop,
// or you can import it here if this component is self-contained for data.
// For now, let's assume it's passed via props from App.js.

const SampleWorksSection = ({ experience }) => {
    // Collect all unique sample works from all experiences
    const allSampleWorks = experience.flatMap(exp => exp.sampleWorks || []);

    return (
        <section id="sample-works" className="py-12 bg-gray-50 rounded-lg shadow-xl px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center border-b-2 border-blue-500 pb-2">My Sample Works</h2>
                {allSampleWorks.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allSampleWorks.map((work, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-blue-700 mb-3">{work.name}</h3>
                                <p className="text-gray-700 mb-4">
                                    A brief description of {work.name} would go here.
                                    (Add a 'description' field to your sampleWorks objects in `profileData.js` if needed.)
                                </p>
                                <a
                                    href={work.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300"
                                >
                                    View Project
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-7 7m7 0V4" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">No sample works available yet.</p>
                )}
            </div>
        </section>
    );
};

export default SampleWorksSection;