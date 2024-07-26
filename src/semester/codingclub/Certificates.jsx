import React from 'react';
import data from './data.json';
import './CodingClub.css';

const Certificates = () => {
    const certificates = data.certificates;

    return (
        <div className="certificates">
            <h1>Certificates</h1>
            {Object.keys(certificates).map((department) => (
                <div key={department}>
                    <h2>{department}</h2>
                    <ul>
                        {certificates[department].map((cert, index) => (
                            <li key={index}>
                                <strong>{cert.id}</strong> - {cert.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Certificates;
