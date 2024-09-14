import React, { useState } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaBookmark, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function FeaturedJobs() {
  const [expandedJobId, setExpandedJobId] = useState(null);

  // Sample job data
  const featuredJobs = [
    { id: 1, title: "Software Engineer", company: "Tech Co.", location: "Bangalore, India", jobType: "Permanent", fullTime: true, skills: "Information Security", description: "Senior Control Tester at ANZ, identifying and assessing controls.", postingEndDate: "23/09/2024", reqID: "74130" },
    { id: 2, title: "Data Scientist", company: "Data Inc.", location: "Mumbai, India", jobType: "Permanent", fullTime: true, skills: "Data Analysis, Machine Learning", description: "Work with large datasets to extract insights and drive business decisions.", postingEndDate: "25/09/2024", reqID: "74131" },
    { id: 3, title: "Product Manager", company: "Innovate Ltd.", location: "Delhi, India", jobType: "Contract", fullTime: false, skills: "Product Development", description: "Leading product teams to design and innovate.", postingEndDate: "29/09/2024", reqID: "74132" },
    { id: 4, title: "UX Designer", company: "DesignWorks", location: "Hyderabad, India", jobType: "Permanent", fullTime: true, skills: "UX Design", description: "Designing user-friendly experiences.", postingEndDate: "15/10/2024", reqID: "74133" },
    { id: 5, title: "Marketing Specialist", company: "MarketPro", location: "Chennai, India", jobType: "Permanent", fullTime: true, skills: "Digital Marketing", description: "Driving marketing campaigns and engagement.", postingEndDate: "30/09/2024", reqID: "74134" },
    { id: 6, title: "DevOps Engineer", company: "OpsTeam", location: "Pune, India", jobType: "Permanent", fullTime: true, skills: "Cloud Infrastructure, CI/CD", description: "Building and maintaining cloud systems.", postingEndDate: "01/10/2024", reqID: "74135" },
    { id: 7, title: "Content Writer", company: "WriteRight", location: "Bangalore, India", jobType: "Contract", fullTime: false, skills: "Creative Writing", description: "Writing content for various platforms.", postingEndDate: "10/10/2024", reqID: "74136" },
    { id: 8, title: "Data Analyst", company: "DataVision", location: "Bangalore, India", jobType: "Permanent", fullTime: true, skills: "Data Analysis", description: "Analyzing data for business decisions.", postingEndDate: "08/10/2024", reqID: "74137" },
    { id: 9, title: "Front-End Developer", company: "WebForge", location: "Delhi, India", jobType: "Permanent", fullTime: true, skills: "React, JavaScript", description: "Developing user interfaces.", postingEndDate: "20/10/2024", reqID: "74138" },
    { id: 10, title: "Back-End Developer", company: "CodeSmiths", location: "Mumbai, India", jobType: "Permanent", fullTime: true, skills: "Node.js, MongoDB", description: "Developing server-side logic.", postingEndDate: "22/10/2024", reqID: "74139" },
    { id: 11, title: "Sales Manager", company: "SalesForce", location: "Chennai, India", jobType: "Contract", fullTime: true, skills: "Sales Management", description: "Leading sales teams to achieve goals.", postingEndDate: "15/11/2024", reqID: "74140" },
    { id: 12, title: "HR Specialist", company: "HRMax", location: "Hyderabad, India", jobType: "Permanent", fullTime: true, skills: "Human Resources", description: "Managing HR processes.", postingEndDate: "10/11/2024", reqID: "74141" },
  ];

  const toggleJob = (id) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  return (
    <section className="bg-gradient-to-r from-[#E2DAD6] to-[#F5EDED] py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 relative z-10 text-[#3f2182]">Featured Jobs</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {featuredJobs.map(job => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 relative z-10">
                <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => toggleJob(job.id)}>
                  <div className="flex items-center">
                    <FaBriefcase className="text-3xl text-[#6482AD] mr-4" />
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold text-[#3f2182]">{job.title}</h3>
                      <p className="text-sm text-gray-500">{job.company}</p>
                    </div>
                  </div>
                  {expandedJobId === job.id ? <FaChevronUp className="text-[#3f2182]" /> : <FaChevronDown className="text-[#3f2182]" />}
                </div>
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-xl text-[#6482AD] mr-2" />
                  <p className="text-sm text-gray-500">{job.location}</p>
                </div>
                {expandedJobId === job.id && (
                  <div className="mt-4 text-sm text-gray-600">
                    <p className="mb-2"><strong>Job Type:</strong> {job.jobType}</p>
                    <p className="mb-2"><strong>Full-Time:</strong> {job.fullTime ? "Yes" : "No"}</p>
                    <p className="mb-2"><strong>Skills:</strong> {job.skills}</p>
                    <p className="mb-2"><strong>Description:</strong> {job.description}</p>
                    <p className="mb-2"><strong>Posting End Date:</strong> {job.postingEndDate}</p>
                    <p className="mb-2"><strong>Req ID:</strong> {job.reqID}</p>
                    <div className="flex items-center mt-6">
                      <button className="bg-gradient-to-r from-[#6482AD] to-[#7FA1C3] text-white px-4 py-2 rounded-full hover:from-[#7FA1C3] hover:to-[#6482AD] transition-all duration-300 ease-in-out mr-4">Apply Now</button>
                      <FaBookmark className="text-[#6482AD] cursor-pointer hover:text-[#7FA1C3]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedJobs;
