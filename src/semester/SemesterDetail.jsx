// SemesterDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import data from './codingclub/data.json'; // Adjust the path as needed
import CodingClubDetail from './codingclub/CodingClub';
import ClubOutcomes from './codingclub/ClubOutcomes';
import ClubCommittee from './codingclub/ClubCommittee';
import Schedule from './codingclub/Schedule';
import ClubMembers from './codingclub/ClubMembers';
import Gallery from './codingclub/Gallery';
import Certificates from './codingclub/Certificates';
import './SemesterDetail.css';

const SemesterDetail = () => {
    const { id } = useParams();

    // Find the specific item in the data based on the id
    const item = data.find(item => item.id === parseInt(id));

    if (!item) {
        return (
            <section className="semester-detail">
                <h1>Data Not Found</h1>
                <p>The data you're looking for does not exist.</p>
            </section>
        );
    }

    const renderComponent = () => {
        switch (item.category) {
            case 'codingClub':
                return <CodingClubDetail club={item} />;
            case 'clubOutcomes':
                return <ClubOutcomes outcomes={item} />;
            case 'clubCommittee':
                return <ClubCommittee committee={item} />;
            case 'schedule':
                return <Schedule schedule={item} />;
            case 'clubMembers':
                return <ClubMembers members={item} />;
            case 'gallery':
                return <Gallery gallery={item} />;
            case 'certificates':
                return <Certificates certificates={item} />;
            default:
                return <p>Unknown category</p>;
        }
    };

    return (
        <section className="semester-detail">
            <h1>{item.title}</h1>
            {renderComponent()}
        </section>
    );
};

export default SemesterDetail;