// src/pages/ApplicantDashboardPage.js
import React from 'react';
import Header from '../common/Header';
import ApplicantDashboard from '../user/ApplicantDashboard';
import Footer from '../common/Footer';

function ApplicantDashboardPage() {
  return (
    <>

      <main className="bg-[#7FA1C3] p-8">
        <h1 className="text-3xl font-bold text-white mb-6">Applicant Dashboard</h1>
        <ApplicantDashboard />
      </main>

    </>
  );
}

export default ApplicantDashboardPage;
