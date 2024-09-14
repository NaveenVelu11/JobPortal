import React, { useState } from 'react';

// Sample news articles
const newsArticles = [
  { 
    id: 1, 
    title: "Tech Jobs Boom in India", 
    date: "2024-09-01", 
    location: "Bangalore, India", 
    summary: "The Indian tech sector continues to grow at a rapid pace, with an increasing demand for skilled software engineers, especially in cities like Bangalore and Hyderabad. Remote work options are also expanding.",
    additionalInfo: "In addition to a surge in job opportunities, the sector is also witnessing a rise in salaries and benefits, making it an attractive field for professionals."
  },
  { 
    id: 2, 
    title: "India's Hiring Trends 2024: A Focus on AI", 
    date: "2024-09-10", 
    location: "Mumbai, India", 
    summary: "The Indian job market is witnessing a surge in demand for AI and machine learning specialists. Companies across Mumbai, Pune, and Gurgaon are heavily investing in automation and AI-driven technologies, creating new opportunities for tech talent.",
    additionalInfo: "This trend is leading to an increase in specialized training programs and certifications, aiming to equip professionals with the necessary skills for the evolving job market."
  },
  { 
    id: 3, 
    title: "Top Skills Employers Seek in India", 
    date: "2024-09-08", 
    location: "Delhi, India", 
    summary: "As India emerges as a global hub for startups, employers are prioritizing soft skills such as leadership, communication, and problem-solving, along with technical expertise in fields like data analytics and cybersecurity.",
    additionalInfo: "Employers are also placing a strong emphasis on adaptability and continuous learning, recognizing that these skills are crucial for success in a rapidly changing work environment."
  },
  { 
    id: 4, 
    title: "Remote Work Gains Traction in India", 
    date: "2024-08-28", 
    location: "Hyderabad, India", 
    summary: "The remote work culture has grown exponentially in India. IT companies based in Hyderabad and Chennai are offering flexible work-from-home policies, allowing professionals to work from any part of the country while maintaining productivity.",
    additionalInfo: "This shift has led to improved work-life balance for many employees and has also prompted companies to invest in remote work infrastructure and technology."
  },
  { 
    id: 5, 
    title: "Growth of E-Commerce Jobs in India", 
    date: "2024-09-12", 
    location: "Gurgaon, India", 
    summary: "E-commerce giants like Amazon and Flipkart are increasing their workforce in India, especially in logistics and warehousing sectors. Gurgaon has become a major hub for such roles, attracting thousands of job seekers.",
    additionalInfo: "The expansion in e-commerce is not only creating new job opportunities but also driving innovation in logistics and supply chain management, contributing to the growth of the sector."
  },
  { 
    id: 6, 
    title: "Government Initiatives to Boost Employment in India", 
    date: "2024-09-15", 
    location: "New Delhi, India", 
    summary: "The Indian government has introduced new schemes aimed at boosting employment across various sectors, with a focus on skill development and job creation in rural areas.",
    additionalInfo: "These initiatives are expected to improve access to job opportunities and training programs, particularly in underserved regions, fostering more inclusive economic growth."
  }
];

function LatestNewsPage() {
  const [expandedArticleId, setExpandedArticleId] = useState(null);

  const handleToggleExpand = (id) => {
    setExpandedArticleId(expandedArticleId === id ? null : id);
  };

  return (
    <div className="bg-[#F5EDED] min-h-screen p-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-[#003B6F] mb-10 text-center">Latest News in India</h1>

        <div className="space-y-8">
          {newsArticles.map((article) => (
            <div key={article.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-[#003B6F] mb-2">{article.title}</h2>
              <p className="text-gray-500 mb-4">{article.date} | {article.location}</p>
              <p className={`text-gray-700 mb-4 ${expandedArticleId === article.id ? '' : 'line-clamp-3'}`}>
                {article.summary}
              </p>
              {expandedArticleId === article.id && (
                <p className="text-gray-600 mt-2">{article.additionalInfo}</p>
              )}
              <button
                onClick={() => handleToggleExpand(article.id)}
                className="bg-[#003B6F] text-white py-2 px-6 rounded-lg hover:bg-[#002244] transition-colors duration-200 flex items-center"
              >
                {expandedArticleId === article.id ? 'Show Less' : 'Read More'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestNewsPage;
