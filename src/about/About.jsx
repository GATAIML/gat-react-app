// src/AboutSection.js
import React from 'react';
import './About.css'; // Import CSS for the AboutSection

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                {/* <div className="intro">
                    <h2>Introduction</h2>
                    <p>Artificial Intelligence & Machine Learning is one of the fastest growing and in demand skill. It is a technology used by every field of science, medicine and business administration. Some of its applications are found in every corner of the world like Agriculture, healthcare, driverless cars, E-commerce etc and it’s a dream to reinvent the world and human lifestyle.</p>
                    <p>An AI career is future-proof because it is a component of so many cutting-edge and forward-thinking advancements. Companies look to harness such aspiring technologies and the skills in this area are most required.</p>
                    <p>Therefore, we at Global Academy of Technology offer you this exciting 4-year B.E program in Artificial Intelligence and Machine Learning to create a vibrant learning ecosystem where every student is professionally groomed to full-fill the needs of new era of AI & ML.</p>
                </div> */}
                <div className="department">
                    <h2>About the Department</h2>
                    <p>The Department of Artificial Intelligence and Machine Learning is a community for academic excellence and innovation.</p>
                    <p>The curriculum is designed to provide a strong foundation in core computer science, artificial intelligence, and machine learning specialization concepts.</p>
                    <p>The students benefit from this dynamic learning environment.</p>
                    <p>We are proud in hosting numerous events like Alfiesta, BoT lab inauguration, Webathon, and many more.</p>
                    <p>The department has introduced various vibrant student clubs and facilitated expert guidance from the talented faculty.</p>
                    <p>The department solicitates ultimate support for initiatives that aim to increase the representation of underrepresented groups in technical fields.</p>
                </div>
                <div className="college">
                    <h2>About the College</h2>
                    <p>Global Academy of Technology (GAT), established in 2001, has quickly risen to become one of the premier Engineering and Management Institutes in Bengaluru.</p>
                    <p>GAT provides quality Education with a vibrant and nurturing environment to harness professional skills.</p>
                    <p>The campus is spread over 10 acres, offering students ample opportunities to engage in a variety of academic and non-academic activities towards holistic development.</p>
                    <p>Along with academic excellence, GAT places great emphasis on the overall development of the students by providing suitable exposure to industry and research, participation in various co-curricular and extracurricular activities along with mentoring and counselling support.</p>
                    <p>GAT has committed towards holistic development and made it an ideal choice among students looking for comprehensive education.</p>
                </div>
            </div>
            <hr />
        </section>
    );
};

export default AboutSection;
