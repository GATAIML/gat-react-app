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

    // Retrieve the data based on the ID
    // For simplicity, assuming `id` is a category like 'codingClub', 'clubOutcomes', etc.
    const category = id; // This should be adjusted based on your ID scheme
    const dataCategory = data[category];

    if (!dataCategory) {
        return (
            <section className="semester-detail">
                <h1>Data Not Found</h1>
                <p>The data you're looking for does not exist.</p>
            </section>
        );
    }

    return (
        <section className="semester-detail">
            {category === 'codingClub' && <CodingClubDetail club={data.codingClub} />}
            {category === 'clubOutcomes' && <ClubOutcomes outcomes={data.clubOutcomes} />}
            {category === 'clubCommittee' && <ClubCommittee committee={data.clubCommittee} />}
            {category === 'schedule' && <Schedule schedule={data.schedule} />}
            {category === 'clubMembers' && <ClubMembers members={data.clubMembers} />}
            {category === 'gallery' && <Gallery gallery={data.gallery} />}
            {category === 'certificates' && <Certificates certificates={data.certificates} />}
        </section>
    );
};

export default SemesterDetail;
