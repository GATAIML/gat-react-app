import React from 'react';
import './Home.css'; 
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <Typewriter
                    options={{
                        strings: ["Department of Artificial Intelligence & Machine Learning"],
                        autoStart: true,
                        loop: true,
                        delay: 80, // Adjust typing speed
                        deleteSpeed: 30 // Adjust deleting speed
                    }}
                />
            </div>
        </div>
    );
};

export default Home;
