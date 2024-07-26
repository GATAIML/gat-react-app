import React from 'react';
import data from './data.json';
import './CodingClub.css';

const ClubCommittee = () => {
    const committee = data.clubCommittee;

    return (
        <div className="club-committee">
            <h1>Club Committee</h1>
            <ul>
                {committee.map((member, index) => (
                    <li key={index}>
                        <strong>{member.name}</strong> - {member.position}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClubCommittee;
