import React, { useState } from 'react';
import { FaLaptopCode, FaMoneyBillWave, FaHospital, FaGraduationCap, FaBullhorn, FaCode, FaCog, FaStar, FaUsers, FaChartLine } from 'react-icons/fa';

function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { name: 'Technology', icon: <FaLaptopCode className="text-5xl mb-4" />, details: 'Explore jobs in software development, IT services, and more. This includes roles like Software Engineers, System Architects, and IT Consultants, working on cutting-edge technologies and innovative solutions.' },
    { name: 'Finance', icon: <FaMoneyBillWave className="text-5xl mb-4" />, details: 'Find roles in accounting, financial analysis, investment banking, and more. Positions include Financial Analysts, Accountants, and Risk Managers working to manage finances and strategic investments.' },
    { name: 'Healthcare', icon: <FaHospital className="text-5xl mb-4" />, details: 'Discover opportunities in hospitals, clinics, and research institutions. Roles include Doctors, Nurses, and Research Scientists focused on improving patient care and advancing medical knowledge.' },
    { name: 'Education', icon: <FaGraduationCap className="text-5xl mb-4" />, details: 'Check out jobs in schools, universities, and educational institutions. Opportunities include Teachers, Professors, and Education Administrators dedicated to fostering learning and academic achievement.' },
    { name: 'Marketing', icon: <FaBullhorn className="text-5xl mb-4" />, details: 'Find positions in digital marketing, public relations, and advertising. This includes Marketing Managers, SEO Specialists, and Brand Strategists working to enhance brand presence and market products effectively.' },
    { name: 'Engineering', icon: <FaCode className="text-5xl mb-4" />, details: 'Explore diverse roles in engineering fields such as Civil, Mechanical, and Electrical Engineering. Jobs involve designing, building, and maintaining infrastructure and technology solutions.' },
    { name: 'Management', icon: <FaCog className="text-5xl mb-4" />, details: 'Find opportunities in project management, operations, and executive roles. This includes Project Managers, Operations Managers, and Executives overseeing strategic initiatives and organizational goals.' },
    { name: 'Sales', icon: <FaStar className="text-5xl mb-4" />, details: 'Discover roles in sales and business development. Positions include Sales Representatives, Account Managers, and Business Development Executives focused on driving revenue and building client relationships.' },
    { name: 'Customer Service', icon: <FaUsers className="text-5xl mb-4" />, details: 'Check out jobs in customer service and support. Roles include Customer Service Representatives, Support Specialists, and Client Relations Managers working to ensure customer satisfaction and resolve issues.' },
    { name: 'Analytics', icon: <FaChartLine className="text-5xl mb-4" />, details: 'Find roles in data analytics and business intelligence. This includes Data Analysts, Business Analysts, and Data Scientists using data to drive business decisions and strategies.' },
  ];

  return (
    <section className="relative bg-[#E2DAD6] py-20">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#F5F5F5" fillOpacity="0.8" d="M0,192L30,186.7C60,181,120,171,180,154.7C240,139,300,117,360,133.3C420,149,480,203,540,213.3C600,224,660,192,720,181.3C780,171,840,181,900,202.7C960,224,1020,256,1080,266.7C1140,277,1200,267,1260,245.3C1320,224,1380,192,1410,176L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-semibold text-center mb-12 text-[#3f2182]">Explore Job Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map(category => (
            <div key={category.name} className="relative">
              <div
                className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => setActiveCategory(category.name === activeCategory ? null : category.name)}
              >
                <div className="flex flex-col items-center">
                  {category.icon}
                  <h3 className="text-2xl font-semibold mt-4 text-[#3f2182]">{category.name}</h3>
                </div>
              </div>
              <div className={`transition-all duration-500 ease-in-out ${
                activeCategory === category.name ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
              } overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg p-4`}>
                <p className="text-gray-700">{category.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
