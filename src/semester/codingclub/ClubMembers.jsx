import React from 'react';
import data from './data.json';
import './CodingClub.css';

const ClubMembers = () => {
    const members = data.clubMembers;

    return (
        <div className="club-members">
            <h1>Club Members</h1>
            <ul>
                {members.map((member, index) => (
                    <li key={index}>
                        <strong>{member.name}</strong> - {member.department}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClubMembers;
