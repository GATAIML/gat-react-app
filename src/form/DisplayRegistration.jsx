import React, { useState, useEffect } from 'react';
import { db, collection, getDocs } from '../firebase'; // Import Firestore functions
import './DisplayRegistrations.css';

const DisplayRegistrations = () => {
    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRegistrations = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'registrations'));
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setRegistrations(data);
            } catch (err) {
                setError('Failed to fetch registrations');
            } finally {
                setLoading(false);
            }
        };

        fetchRegistrations();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className="display-section">
            <div className="display-container">
                <h2>Registrations</h2>
                {registrations.length === 0 ? (
                    <p>No registrations found</p>
                ) : (
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Semester</th>
                                <th>File</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registrations.map((reg) => (
                                <tr key={reg.id}>
                                    <td>{reg.fullName}</td>
                                    <td>{reg.email}</td>
                                    <td>{reg.phoneNumber}</td>
                                    <td>{reg.sem}</td>
                                    <td>
                                        {reg.fileUrl ? (
                                            <a href={reg.fileUrl} target="_blank" rel="noopener noreferrer">
                                                Click here
                                            </a>
                                        ) : (
                                            'No file uploaded'
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </section>
    );
};

export default DisplayRegistrations;
