import React from 'react';

const ContactSection = ({ personal, research, travel, references }) => (
    <section id="contact" className="py-12 bg-white rounded-lg shadow-xl px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center border-b-2 border-blue-500 pb-2">Contact & Additional Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-blue-700 mb-4">Personal Details</h3>
                    <p className="text-gray-700 mb-2"><strong>Address:</strong> {personal.address}</p>
                    <p className="text-gray-700 mb-2"><strong>Mobile:</strong> <a href={`tel:${personal.mobile}`} className="text-blue-600 hover:underline">{personal.mobile}</a></p>
                    <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href={`mailto:${personal.email}`} className="text-blue-600 hover:underline">{personal.email}</a></p>
                    <p className="text-gray-700 mb-2"><strong>Date of Birth:</strong> {personal.dob}</p>
                    <p className="text-gray-700 mb-2"><strong>Nationality:</strong> {personal.nationality}</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-blue-700 mb-4">Research & Travel</h3>
                    {research && research.length > 0 && (
                        <>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Research Papers/Projects:</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                                {research.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </>
                    )}
                    {travel && (
                        <>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Travel Experience:</h4>
                            {travel.asia && travel.asia.length > 0 && (
                                <p className="text-gray-700 mb-1"><strong>Asia:</strong> {travel.asia.join(', ')}</p>
                            )}
                            {travel.nepal && (
                                <p className="text-gray-700"><strong>Nepal:</strong> {travel.nepal}</p>
                            )}
                        </>
                    )}
                </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">References</h3>
                {references.map((ref, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                        <p className="text-lg font-semibold text-gray-900">{ref.name}</p>
                        <p className="text-gray-700">{ref.position}, {ref.organization}</p>
                        <p className="text-gray-700">Contact: {ref.contact}</p>
                        <p className="text-gray-700">Email: <a href={`mailto:${ref.email}`} className="text-blue-600 hover:underline">{ref.email}</a></p>
                        <p className="text-gray-700">Relation: {ref.relation}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ContactSection;