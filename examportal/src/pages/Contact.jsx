import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Form.css'

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('This is a placeholder and will be completed after the backend is implemented.');
    };

    return (
        <div className='outer'>
            <Header head1={'Login'} head2={'Register'} />
            <div className='form'>
                <h2>Contact Us</h2>
                <p>Please fill out the form below to get in touch with us.</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" placeholder='Your Name' id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" placeholder='Your Email' id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" placeholder='Write your meassage here' name="message" rows="4" required />
                    </div>
                    <button type="submit">Send</button>
                </form>
                <div className="other">
                    <h3>Contact Options</h3>
                    <p>Email: abcd@gmail.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>WhatsApp: +1 (123) 456-7890</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
