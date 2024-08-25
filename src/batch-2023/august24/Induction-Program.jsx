import React from 'react';
import './EventDetails.css';

const InductionProgram = () => {
    const galleryImages = [
        { id: 1, src: 'https://firebasestorage.googleapis.com/v0/b/image-sharing-app-61874.appspot.com/o/images%2FInduction%20Program.png?alt=media&token=8012e273-15a6-437b-aa03-d55f4fad4056', alt: 'Induction Program Image 1' },
        { id: 2, src: 'https://firebasestorage.googleapis.com/v0/b/image-sharing-app-61874.appspot.com/o/images%2FInduction%20Program.png?alt=media&token=8012e273-15a6-437b-aa03-d55f4fad4056', alt: 'Induction Program Image 2' },
        { id: 3, src: 'https://firebasestorage.googleapis.com/v0/b/image-sharing-app-61874.appspot.com/o/images%2FInduction%20Program.png?alt=media&token=8012e273-15a6-437b-aa03-d55f4fad4056', alt: 'Induction Program Image 3' },
        // Add more images as needed
    ];

    return (
        <section className="event-details-section">
            <div className="event-details-content">
                <h2>Induction Program</h2>
                
                <img src="https://firebasestorage.googleapis.com/v0/b/image-sharing-app-61874.appspot.com/o/images%2FInduction%20Program.png?alt=media&token=8012e273-15a6-437b-aa03-d55f4fad4056" alt="Induction Program" className="event-details-image" />

                <section className="about-gat">
                    <h3>About GAT</h3>
                    <p>
                        Global Academy of Technology (GAT), established in 2001, has quickly risen to become one of the premier Engineering and Management Institutes in Bengaluru. GAT provides quality Education with a vibrant and nurturing environment to harness professional skills. The campus is spread over 10 acres, offering students ample opportunities to engage in a variety of academic and non-academic activities towards holistic development.
                    </p>
                </section>

                <section className="about-department">
                    <h3>About the Department</h3>
                    <p>
                        The Artificial Intelligence and Machine Learning department is a community for academic excellence and innovation. The curriculum is designed to provide a strong foundation in core Computer Science and AI/ML specialization concepts while allowing specialization in these fields. The students benefit from this dynamic learning environment.
                    </p>
                </section>

                <section className="about-induction-program">
                    <h3>About Induction Program</h3>
                    <p>
                        The Induction Program is designed to welcome and introduce new students to the campus, providing them with the necessary information and resources to begin their academic journey successfully.
                    </p>
                </section>

                <section className="gallery">
                    <h3>Gallery</h3>
                    <div className="gallery-grid">
                        {galleryImages.map((image) => (
                            <div key={image.id} className="gallery-card">
                                <img src={image.src} alt={image.alt} className="gallery-image" />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}

export default InductionProgram;
