// Semester1.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Semester1.css';

const semesterData = [
    { id: 1, title: 'Introduction to AI', photo: '/path/to/photo1.jpg' },
    { id: 2, title: 'Machine Learning Basics', photo: '/path/to/photo2.jpg' },
    { id: 3, title: 'Deep Learning Fundamentals', photo: '/path/to/photo3.jpg' }
];

const Semester2 = () => {
    return (
        <section className="semester1">
            <h1>Semester 1 Topics</h1>
            <div className="card-container">
                {semesterData.map((item) => (
                    <Link key={item.id} to={`/semester1/${item.id}`} className="card">
                        <img src={item.photo} alt={item.title} className="card-photo" />
                        <div className="card-title">{item.title}</div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Semester2;
