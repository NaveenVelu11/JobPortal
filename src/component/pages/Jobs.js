import React, { useState } from 'react';
import Header from '../common/Header';
import SearchBar from '../common/SearchBar';
import JobList from '../common/JobList';
import Pagination from '../common/Pagination';
import Footer from '../common/Footer';

// Sample data for demonstration
const allJobs = [
  { 
    id: 1, 
    title: "Software Engineer", 
    company: "Tech Co.", 
    location: "Remote", 
    jobType: "Full-Time", 
    experienceLevel: "Mid-Level", 
    description: "Join our team to build innovative tech products.", 
    datePosted: "2024-09-12" 
  },
  { 
    id: 2, 
    title: "Data Scientist", 
    company: "Data Inc.", 
    location: "San Francisco, CA", 
    jobType: "Part-Time", 
    experienceLevel: "Senior", 
    description: "Work with big data and machine learning models.", 
    datePosted: "2024-09-10" 
  },
  { 
    id: 3, 
    title: "Product Manager", 
    company: "Product Co.", 
    location: "New York, NY", 
    jobType: "Full-Time", 
    experienceLevel: "Junior", 
    description: "Lead product development teams to success.", 
    datePosted: "2024-09-08" 
  },
  { 
    id: 4, 
    title: "UX Designer", 
    company: "Design Inc.", 
    location: "Chicago, IL", 
    jobType: "Contract", 
    experienceLevel: "Mid-Level", 
    description: "Create seamless user experiences for our platform.", 
    datePosted: "2024-09-07" 
  },
  { 
    id: 5, 
    title: "Web Developer", 
    company: "Web Co.", 
    location: "Austin, TX", 
    jobType: "Full-Time", 
    experienceLevel: "Junior", 
    description: "Build dynamic websites and web apps.", 
    datePosted: "2024-09-05" 
  },
  // Add more job listings as needed
];

function Jobs() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter jobs based on search query
  const filteredJobs = allJobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
     
      <main className="bg-[#E2DAD6] p-8">
        {/* Search Bar */}
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        {/* Job List */}
        <div className="grid grid-cols-1 gap-6 mt-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <div key={job.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold text-[#3f2182]">{job.title}</h3>
                  <span className="text-sm text-gray-500">{job.datePosted}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{job.company}</p>
                <p className="text-sm text-gray-500 mb-3">{job.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <span className="block">📍 {job.location}</span>
                    <span className="block">⏳ {job.jobType}</span>
                    <span className="block">📊 {job.experienceLevel}</span>
                  </div>
                  <button className="bg-gradient-to-r from-[#6482AD] to-[#7FA1C3] text-white px-4 py-2 rounded-full hover:from-[#7FA1C3] hover:to-[#6482AD] transition-all duration-300 ease-in-out">
                    Apply Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No jobs found matching your search criteria.</p>
          )}
        </div>

        {/* Pagination */}
        <Pagination />
      </main>
    
    </>
  );
}

export default Jobs;
