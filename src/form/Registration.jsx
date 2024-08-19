import React, { useState } from 'react';
import { db, storage, collection, addDoc, ref, uploadBytes, getDownloadURL } from '../firebase';
import './Registration.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        sem: '',
        file: null
    });

    const [errors, setErrors] = useState({});
    const [uploading, setUploading] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
        if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
        if (formData.phoneNumber.length < 10) newErrors.phoneNumber = 'Invalid phone number';
        if (!formData.sem) newErrors.sem = 'Please select a semester';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setUploading(true);

        try {
            // Upload file to Firebase Storage
            let fileUrl = '';
            if (formData.file) {
                const fileRef = ref(storage, `uploads/${Date.now()}_${formData.file.name}`);
                const uploadResult = await uploadBytes(fileRef, formData.file);
                fileUrl = await getDownloadURL(uploadResult.ref);
            }

            // Save form data and file URL to Firestore
            await addDoc(collection(db, 'registrations'), {
                fullName: formData.fullName,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                sem: formData.sem,
                fileUrl: fileUrl,
                timestamp: new Date()
            });

            // Clear form after submission
            setFormData({
                fullName: '',
                email: '',
                phoneNumber: '',
                sem: '',
                file: null
            });
            setErrors({});
            setUploading(false);
            console.log('Form submitted successfully');
        } catch (error) {
            console.error('Failed to submit form:', error);
            setUploading(false);
        }
    };

    return (
        <section className="form-section">
            <div className="form-container">
                <h2>Student Information</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Name:</label>
                        <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                        {errors.fullName && <div className="error-message">{errors.fullName}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            id="phoneNumber"
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                        {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="sem">Semester:</label>
                        <select
                            id="sem"
                            name="sem"
                            value={formData.sem}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Semester</option>
                            <option value="2">2nd Semester</option>
                            <option value="4">4th Semester</option>
                            <option value="6">6th Semester</option>
                            <option value="8">8th Semester</option>
                        </select>
                        {errors.sem && <div className="error-message">{errors.sem}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="file">Upload File:</label>
                        <input
                            id="file"
                            type="file"
                            name="file"
                            onChange={handleChange}
                        />
                        {errors.file && <div className="error-message">{errors.file}</div>}
                    </div>
                    <button type="submit" className="submit-btn" disabled={uploading}>
                        {uploading ? 'Uploading...' : 'Submit'}
                    </button>
                </form>
                {Object.keys(errors).length > 0 && (
                    <div className="error-dialog">
                        Please correct the following errors:
                        <ul>
                            {Object.values(errors).map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <hr />
            </div>
        </section>
    );
};

export default RegistrationForm;
