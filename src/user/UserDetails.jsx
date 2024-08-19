// UserDetails.jsx
import React, { useEffect, useState } from 'react';
import { db, collection, getDocs } from './firebase';

const UserDetails = ({ email }) => {
    const [userDetails, setUserDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'users'));
                const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                const user = users.find(user => user.email === email);
                setUserDetails(user || {});
            } catch (err) {
                setError('Failed to fetch user details');
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, [email]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="user-details">
            {userDetails ? (
                <div>
                    <h2>Welcome, {userDetails.fullName}</h2>
                    <p>Email: {userDetails.email}</p>
                    <p>Phone: {userDetails.phoneNumber}</p>
                </div>
            ) : (
                <p>No user details found.</p>
            )}
        </div>
    );
};

export default UserDetails;
