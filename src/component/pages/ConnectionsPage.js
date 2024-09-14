import React, { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';

// Sample data
const sampleConnections = [
  { id: 1, name: 'Ravi Kumar', jobTitle: 'Software Engineer', company: 'Infosys', location: 'Bengaluru, Karnataka' },
  { id: 2, name: 'Anjali Sharma', jobTitle: 'Data Scientist', company: 'TCS', location: 'Mumbai, Maharashtra' },
  { id: 3, name: 'Suresh Patel', jobTitle: 'Project Manager', company: 'Wipro', location: 'Hyderabad, Telangana' },
  { id: 4, name: 'Priya Verma', jobTitle: 'UI/UX Designer', company: 'Cognizant', location: 'Chennai, Tamil Nadu' },
  { id: 5, name: 'Rajesh Mehta', jobTitle: 'DevOps Engineer', company: 'HCL Technologies', location: 'Pune, Maharashtra' },
  { id: 6, name: 'Neha Singh', jobTitle: 'Quality Analyst', company: 'Accenture', location: 'Gurgaon, Haryana' },
  { id: 7, name: 'Amit Joshi', jobTitle: 'Backend Developer', company: 'Capgemini', location: 'Noida, Uttar Pradesh' },
  { id: 8, name: 'Pooja Nair', jobTitle: 'Frontend Developer', company: 'Tech Mahindra', location: 'Kochi, Kerala' },
  { id: 9, name: 'Vikram Rana', jobTitle: 'Network Engineer', company: 'Cisco', location: 'Bengaluru, Karnataka' },
  { id: 10, name: 'Alok Pandey', jobTitle: 'HR Manager', company: 'IBM', location: 'New Delhi' },
  { id: 11, name: 'Pooja ', jobTitle: 'Frontend Developer', company: 'Tech Mahindra', location: 'Kochi, Kerala' },
  { id: 12, name: 'Priya ', jobTitle: 'UI/UX Designer', company: 'Cognizant', location: 'Chennai, Tamil Nadu' }
];

function ConnectionsPage() {
  const [connections, setConnections] = useState(sampleConnections);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(5); // Number of visible connections

  // Filter connections based on search query
  const filteredConnections = connections.filter(connection =>
    connection.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleConnect = (name) => {
    alert(`Connection request sent to ${name}!`);
  };

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 5); // Load 5 more items
  };

  return (
    <div className="bg-[#F9F9F9] min-h-screen p-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-[#003B6F] mb-10 text-center">Your Professional Connections</h1>
        
        <div className="mb-10">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for connections..."
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003B6F] transition-shadow duration-300"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredConnections.slice(0, visibleCount).map((connection) => (
            <div
              key={connection.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center"
            >
              <div className="w-14 h-14 bg-[#003B6F] text-white text-xl rounded-full flex items-center justify-center mr-4">
                {connection.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-[#003B6F] mb-1">{connection.name}</h2>
                <p className="text-gray-700 text-sm">{connection.jobTitle} at {connection.company}</p>
                <p className="text-gray-500 text-sm">{connection.location}</p>
              </div>
              <button
                onClick={() => handleConnect(connection.name)}
                className="ml-4 bg-[#003B6F] text-white py-2 px-4 rounded-lg hover:bg-[#002244] transition-colors duration-200 flex items-center"
              >
                <FaUserPlus className="mr-2" /> Connect
              </button>
            </div>
          ))}
        </div>

        {filteredConnections.length > visibleCount && (
          <div className="mt-8 text-center">
            <button
              onClick={loadMore}
              className="bg-[#003B6F] text-white py-2 px-6 rounded-lg hover:bg-[#002244] transition-colors duration-200"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConnectionsPage;
