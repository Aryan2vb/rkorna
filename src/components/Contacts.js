import React, { useState } from 'react';
import './Contacts.css'; // Import the CSS file
import { FaWhatsapp, FaPhone, FaUserCircle } from 'react-icons/fa';

const contacts = [
    {
        name: 'Moni',
        whatsapp: 'https://wa.me/+919993407879',
        phone: 'tel:+9993407879',
    },
    {
        name: 'Gudda',
        whatsapp: 'https://wa.me/+919993472215',
        phone: 'tel:+9993472215',
    },
    {
        name: 'Brandawan',
        whatsapp: 'https://wa.me/+919179918185',
        phone: 'tel:+9179918185',
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = "Name is required";
        if (!formData.email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email address is invalid";
        }
        if (!formData.message) formErrors.message = "Message is required";
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted', formData);
            setFormData({
                name: '',
                email: '',
                message: '',
            });
            setErrors({});
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>

            <div className="contacts-list">
                {contacts.map((contact, index) => (
                    <div className="contact-item" key={index}>
                        <div className="contact-photo">
                            <FaUserCircle size={50} />
                        </div>
                        <div className="contact-info">
                            <h3>{contact.name}</h3>
                            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={20} />
                            </a>
                            <a href={contact.phone}>
                                <FaPhone size={20} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
