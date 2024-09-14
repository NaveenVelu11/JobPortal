import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#7FA1C3] text-white py-8">
      <div className="container mx-auto px-6">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
        <h2 className="text-6xl font-semibold mb-4">Job Portal</h2>
          
        </div>

        {/* Connect with Us Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="#" aria-label="Facebook" className="text-white hover:text-[#F5EDED] transition-colors duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-[#F5EDED] transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-[#F5EDED] transition-colors duration-300">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-[#F5EDED] transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/employer-home" className="hover:underline">Employer Home</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2">
              <li><Link to="/sitemap" className="hover:underline">Sitemap</Link></li>
              <li><Link to="/credits" className="hover:underline">Credits</Link></li>
              <li><Link to="/help-center" className="hover:underline">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link to="/fraud-alert" className="hover:underline">Fraud Alert</Link></li>
              <li><Link to="/trust-safety" className="hover:underline">Trust & Safety</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Grievances</h3>
            <ul className="space-y-2">
              <li><Link to="/summons-notices" className="hover:underline">Summons/Notices</Link></li>
              <li><Link to="/grievances" className="hover:underline">Grievances</Link></li>
              <li><Link to="/report-issue" className="hover:underline">Report Issue</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-sm">&copy; 2024 JobPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
