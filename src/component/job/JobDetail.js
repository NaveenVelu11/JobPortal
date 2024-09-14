import React from 'react';

function JobDetail({ job }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto border border-gray-200">
      <h2 className="text-4xl font-extrabold mb-4 text-gray-800">{job.title}</h2>
      <p className="text-lg font-semibold mb-2"><span className="text-gray-600">Company:</span> {job.company}</p>
      <p className="text-lg font-semibold mb-2"><span className="text-gray-600">Location:</span> {job.location}</p>
      <p className="text-base text-gray-700 mb-4">{job.description}</p>
      <p className="text-lg font-semibold mb-2"><span className="text-gray-600">Requirements:</span></p>
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
        {job.requirements.map((req, index) => (
          <li key={index} className="text-base">{req}</li>
        ))}
      </ul>
      <p className="text-lg font-semibold mb-2"><span className="text-gray-600">Salary:</span> {job.salary}</p>
      <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105">Apply Now</button>
    </div>
  );
}

export default JobDetail;
