import React from 'react';
import data from './data.json';
import './CodingClub.css';

const Schedule = () => {
    const schedule = data.schedule;

    return (
        <div className="schedule">
            <h1>Session Schedule</h1>
            <ul>
                {schedule.map((session, index) => (
                    <li key={index}>
                        <h2>{session.sessionCode} - {session.date}</h2>
                        <ul>
                            {session.topics.map((topic, i) => (
                                <li key={i}>{topic}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Schedule;
