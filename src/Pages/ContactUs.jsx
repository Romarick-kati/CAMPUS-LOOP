import React, { useState } from 'react';
import '../CSS/ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-us-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Message:
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;