import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// Main Nav & Footer
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
// Other Pages
import Home from './home/Home';
import RecentActivities from './recentactivites/RecentActivites';
// Batch Wise Section
import Batch2023 from './batch-2023/Batch-2023';
// Events August 2024
import WhitePaperArticulation from './batch-2023/august24/White-Paper-Articulation';
import InductionProgram from './batch-2023/august24/Induction-Program';
//Form
import Registration from './form/Registration';
import DisplayRegistrations from './form/DisplayRegistration';
// Not found
import NotFound from './NotFound';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar setActivePage={() => { }} /> {/* Adjust according to your Navbar component */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recent-events" element={<RecentActivities />} />
            <Route path="/batch-2023" element={<Batch2023 />} />
            <Route path="/batch-2023/white-paper-articulation" element={<WhitePaperArticulation />} />
            <Route path="/batch-2023/induction-program" element={<InductionProgram />} />
            <Route path="/form/Registration" element={<Registration />} />
            <Route path="/form/DisplayRegistration" element={<DisplayRegistrations />} />
            <Route path="*" element={<NotFound />} /> {/* Route for 404 page */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
