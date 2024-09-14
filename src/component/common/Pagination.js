import React from 'react';

function Pagination() {
  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      <button className="bg-[#007BFF] text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:bg-[#0056b3] hover:scale-105 focus:outline-none">
        Previous
      </button>
      <button className="bg-[#007BFF] text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:bg-[#0056b3] hover:scale-105 focus:outline-none">
        Next
      </button>
    </div>
  );
}

export default Pagination;
