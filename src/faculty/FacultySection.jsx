import React from 'react';
import './Faculty.css';
import facultyMembers from './Faculty.json'; // Adjust the path as needed

const FacultySection = () => {
    return (
        <section className="faculty-section">
            <div className="faculty-content">
                <h2>Faculty</h2>
                <div className="faculty-cards">
                    {facultyMembers.map((member, index) => (
                        <div key={index} className="faculty-card">
                            <img src={member.photo} alt={member.name} className="faculty-photo" />
                            <div className="faculty-info">
                                <h3>{member.name}</h3>
                                <p>{member.designation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
        </section>
    );
};

export default FacultySection;
