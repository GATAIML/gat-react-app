import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import Home from './home/Home';
import RecentActivities from './recentactivites/RecentActivites';
import Semester01 from './semester/Semester01';
import SemesterDetail from './semester/SemesterDetail';
import Semester02 from './semester/Semester02';
import NotFound from './NotFound';
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar setActivePage={() => { }} /> {/* Adjust according to your Navbar component */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recent-activities" element={<RecentActivities />} />
            <Route path="/semester-01" element={<Semester01 />} />
            <Route path="/semester1/:id" component={SemesterDetail} />
            <Route path="/semester-02" element={<Semester02 />} />
            <Route path="*" element={<NotFound />} /> {/* Route for 404 page */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
