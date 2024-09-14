// src/pages/EmployerDashboardPage.js
import React from 'react';
import Header from '../common/Header';
import EmployerDashboard from '../user/EmployerDashboard';
import Footer from '../common/Footer';


function EmployerDashboardPage() {
  return (
    <>
      
      <main className="bg-[#6482AD] p-8">
        <h1 className="text-3xl font-bold text-white mb-6">Employer Dashboard</h1>
        <EmployerDashboard />
      </main>

    </>
  );
}

export default EmployerDashboardPage;
