import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#003B6F] to-[#6482AD] text-white h-screen flex items-center justify-center overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full opacity-30">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle className="text-[#7FA1C3]" fill="currentColor" cx="50" cy="50" r="50" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-snug md:leading-tight animate__animated animate__fadeIn animate__delay-1s">
          Discover Your Perfect Job <br /> With Us
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-80 animate__animated animate__fadeIn animate__delay-2s">
          Explore top opportunities, connect with leading employers, and advance your career. Start your journey today!
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/jobs"
            className="bg-[#F5EDED] text-[#003B6F] px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#E2DAD6] transition-transform duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s"
          >
            Browse Jobs
          </Link>
          <Link
            to="/contact"
            className="bg-[#7FA1C3] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#6482AD] transition-transform duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-4s"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 opacity-30">
        <svg className="w-48 h-48 text-[#F5EDED]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <ellipse fill="currentColor" cx="50" cy="50" rx="50" ry="30" />
        </svg>
      </div>
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
        <svg className="w-64 h-64 text-[#7FA1C3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect fill="currentColor" x="10" y="10" width="80" height="80" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
