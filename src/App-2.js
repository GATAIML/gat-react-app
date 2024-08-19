// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import Home from './home/Home';
import RecentActivities from './recentactivites/RecentActivites';
import Semester01 from './semester/Semester01';
import SemesterDetail from './semester/SemesterDetail';
import Semester02 from './semester/Semester02';
import Registration from './form/Registration';
import DisplayRegistrations from './form/DisplayRegistration';
import NotFound from './NotFound';
import LoginPage from './user/LoginPage';
import { auth, onAuthStateChanged } from './firebase';
import './App.css';

const App = () => {
    const [loggedInEmail, setLoggedInEmail] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedInEmail(user.email);
            } else {
                setLoggedInEmail('');
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleLoginSuccess = (email) => {
        setLoggedInEmail(email);
    };

    if (loading) return <p>Loading...</p>;

    return (
        <Router>
            <div>
                {loggedInEmail ? (
                    <>
                        <Navbar setActivePage={() => { }} /> {/* Adjust according to your Navbar component */}
                        <div className="content">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/recent-events" element={<RecentActivities />} />
                                <Route path="/semester01" element={<Semester01 />} />
                                <Route path="/semester01/:id" element={<SemesterDetail />} />
                                <Route path="/semester02" element={<Semester02 />} />
                                <Route path="/form/Registration" element={<Registration />} />
                                <Route path="/form/DisplayRegistration" element={<DisplayRegistrations />} />
                                <Route path="*" element={<NotFound />} /> {/* Route for 404 page */}
                            </Routes>
                        </div>
                        <Footer />
                    </>
                ) : (
                    <LoginPage onLoginSuccess={handleLoginSuccess} />
                )}
            </div>
        </Router>
    );
};

export default App;
