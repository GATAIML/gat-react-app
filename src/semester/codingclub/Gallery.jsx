import React from 'react';
import data from './data.json';
import './CodingClub.css';

const Gallery = () => {
    const gallery = data.gallery;

    return (
        <div className="gallery">
            <h1>Gallery</h1>
            <div className="gallery-grid">
                {gallery.map((item, index) => (
                    <div key={index} className="gallery-item">
                        <img src={item.url} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
