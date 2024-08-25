import React from 'react';
import { Link } from 'react-router-dom';
import './batch-2023.css';
import activities from './Batch-2023-data.json'; // Adjust the path as needed

const Batch2023Activities = () => {
    return (
        <section className="batch-2023-section">
            <div className="batch-2023-content">
                <h2>Batch 2023 Activities</h2>
                <div className="activity-cards">
                    {activities.map((activity, index) => (
                        <div key={index} className="activity-card">
                            <img src={activity.image} alt={activity.title} className="activity-image" />
                            <div className="activity-info">
                                <h3>{activity.title}</h3>
                                <p>{activity.date}</p>
                                <Link to={`/batch-2023/${activity.link}`}>
                                    Read more
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Batch2023Activities;
