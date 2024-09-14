// src/pages/PostJob.js
import React from 'react';
import Header from '../common/Header';
import JobForm from '../job/JobForm';
import Footer from '../common/Footer';

function PostJob() {
  return (
    <>
      
      <main className="bg-gradient-to-r from-[#6482AD] to-[#7FA1C3] p-8 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-[#13072e] mb-6 text-center">
            Post a Job
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Share your job opportunity by filling in the details below.
          </p>
          <JobForm />
        </div>
      </main>
    
    </>
  );
}

export default PostJob;
