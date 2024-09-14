import React from 'react';

function JobList({ jobs = [] }) {
  return (
    <div className="space-y-4">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-400">{job.location}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No jobs found.</p>
      )}
    </div>
  );
}

export default JobList;
