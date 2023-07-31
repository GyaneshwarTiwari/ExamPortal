import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('This is a placeholder and will be completed after the backend is implemented!');
    };
    return (
        <div className='outer'>
            <Header head1={'Login'} head2={'Register'} />
            <div className="box">
                <div className='form'>
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Username:</label>
                            <input type="text" placeholder='Your Username' id="name" name="name" required />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" placeholder='Your Email' id="email" name="email" required />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input type="password" placeholder='Your Password' id="password" name="password" required />
                        </div>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register