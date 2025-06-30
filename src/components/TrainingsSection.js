import React from 'react';

const TrainingsSection = ({ trainings }) => (
    <section id="trainings" className="py-12 bg-white rounded-lg shadow-xl px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center border-b-2 border-blue-500 pb-2">Trainings and Workshops</h2>

            <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-5">Trainings Attended</h3>
                <div className="relative border-l-4 border-blue-500 ml-4 md:ml-8">
                    {trainings.attended.map((training, index) => (
                        <div key={index} className="mb-8 ml-6 relative">
                            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-1.5 border-2 border-white shadow-md"></div>
                            <p className="text-lg font-semibold text-gray-900">{training.name}</p>
                            <p className="text-gray-700 text-sm">Conducted by: {training.conductedBy}</p>
                            {training.location && <p className="text-gray-700 text-sm">Location: {training.location}</p>}
                            {training.duration && <p className="text-gray-700 text-sm">Duration: {training.duration}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-5">Trainings/Workshops Delivered and Facilitated</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-3 pl-4">
                    {trainings.delivered.map((training, index) => (
                        <li key={index} className="text-lg">{training}</li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);

export default TrainingsSection;