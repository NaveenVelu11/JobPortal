import React from 'react';
import { Link } from 'react-router-dom';

function JobCard({ job }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">{job.title}</h2>
      <p className="text-lg font-medium text-gray-600 mb-1">{job.company}</p>
      <p className="text-md text-gray-700 mb-3">{job.location}</p>
      <p className="text-sm text-gray-500 mb-4">{job.description}</p>
      <Link 
        to={`/job-details/${job.id}`} 
        className="text-[#007BFF] hover:text-[#0056b3] font-medium text-md transition-colors duration-300"
      >
        View Details
      </Link>
    </div>
  );
}

export default JobCard;
