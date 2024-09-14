// src/pages/JobDetails.js
import React from 'react';
import Header from '../common/Header';
import JobDetail from '../job/JobDetail';
import Footer from '../common/Footer';


function JobDetails() {
  const job = {
    title: "Full Stack Developer",
    company: "Tech Corp",
    location: "Remote",
    description: "Exciting opportunity to work with a dynamic team...",
    requirements: [
      "5+ years experience in full stack development",
      "Proficiency in React and Node.js",
    ],
    salary: "$100,000 - $120,000/year",
  };

  return (
    <>
  
      <main className="bg-[#F5EDED] p-8">
        <JobDetail job={job} />
      </main>
    
    </>
  );
}

export default JobDetails;
