import React from 'react';
import Hero from '../homepage/Hero';
import Categories from '../homepage/Categories';
import FeaturedJobs from '../homepage/FeaturedJobs';
import LatestNewsPage from '../homepage/LatestNewsPage';
import ConnectionsPage from '../pages/ConnectionsPage';

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedJobs />
      <LatestNewsPage />  {/* Add LatestNewsPage */}
      <ConnectionsPage />  {/* Add ConnectionsPage */}
    </>
  );
}

export default Home;
