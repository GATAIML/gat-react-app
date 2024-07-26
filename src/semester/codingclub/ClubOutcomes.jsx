import React from 'react';
import data from './data.json';
import './CodingClub.css';

const ClubOutcomes = () => {
    const outcomes = data.clubOutcomes;

    return (
        <div className="club-outcomes">
            <h1>Club Outcomes</h1>
            <ul>
                {outcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                ))}
            </ul>
        </div>
    );
};

export default ClubOutcomes;
