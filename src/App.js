import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import About from './about/About';
import FacultySection from './faculty/FacultySection';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <FacultySection />
        </div>
    );
};

export default App;
