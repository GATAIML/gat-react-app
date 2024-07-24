import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import RecentActivities from './recentactivites/RecentActivites';
import Semester01 from './semester/Semester01';
import Semester02 from './semester/Semester02';
import Footer from './footer/Footer';
import './App.css';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  let renderPage;
  switch (activePage) {
    case 'home':
      renderPage = <Home />;
      break;
    case 'recent-activities':
      renderPage = <RecentActivities />;
      break;
    case 'semester-01':
      renderPage = <Semester01 />;
      break;
    case 'semester-02':
      renderPage = <Semester02 />;
      break;
    default:
      renderPage = <Home />;
      break;
  }

  return (
    <div>
      <Navbar setActivePage={setActivePage} />
      <div className="content">
        {renderPage}
      </div>
      <Footer />
    </div>
  );
};

export default App;
