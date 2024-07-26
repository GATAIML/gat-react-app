import React from 'react';
import data from './data.json';
import './CodingClub.css';

const CodingClub = () => {
    const { about } = data.codingClub;

    return (
        <div className="coding-club">
            <h1>About Coding Club</h1>
            <p>{about}</p>
        </div>
    );
};

export default CodingClub;
