import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import Home from './component/pages/Home';
import Jobs from './component/pages/Jobs';
import JobDetails from './component/pages/JobDetails';
import PostJob from './component/pages/PostJob';
import EmployerDashboardPage from './component/pages/EmployerDashboardPage';
import ApplicantDashboardPage from './component/pages/ApplicantDashboardPage';
import ContactPage from './component/pages/ContactPage';
import LoginPage from './component/pages/Login';
import SignupPage from './component/pages/Signup';
import ConnectionsPage from './component/pages/ConnectionsPage'; // Import the new Connections page
import LatestNewsPage from './component/homepage/LatestNewsPage'; // Import the Latest News Page

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="bg-[#F5EDED] min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:jobId" element={<JobDetails />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/employer-dashboard" element={<EmployerDashboardPage />} />
            <Route path="/applicant-dashboard" element={<ApplicantDashboardPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/connections" element={<ConnectionsPage />} /> {/* Route for Connections page */}
            <Route path="/latest-news" element={<LatestNewsPage />} /> {/* Route for Latest News page */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
