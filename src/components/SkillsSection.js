import React from 'react';

const SkillsSection = ({ skills }) => (
    <section id="skills" className="py-12 bg-gray-50 rounded-lg shadow-xl px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center border-b-2 border-blue-500 pb-2">Skills and Competencies</h2>

            <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                    {skills.technical.map((skill, index) => (
                        <span key={index} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Social Skills</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {skills.social.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Computer and Internet Skills</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {skills.computerInternet.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Language Proficiency</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-blue-100">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                                    Language
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                                    Proficiency
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {skills.languages.map((lang, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {lang.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {lang.proficiency}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
);

export default SkillsSection;