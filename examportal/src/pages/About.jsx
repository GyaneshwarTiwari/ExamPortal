import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/About.css'

const About = () => {
    return (
        <div className='outer'>
            <Header head1={'Login'} head2={'Register'} />
            <div className='box'>
                <div className='about'>
                    <h1>About Us</h1>
                    <p>
                        Welcome to Exam Portal, your ultimate destination for all types of education and career-related exams and opportunities. At Exam Portal, we strive to provide you with a seamless and comprehensive platform that caters to all your exam needs, making the journey towards your dream career smoother and more efficient.
                    </p>
                    <p>
                        Our extensive exam database brings you a vast array of exams and opportunities, ensuring you never miss a chance to achieve your goals. From academic entrance exams to competitive government exams, from international proficiency tests to job recruitments in various industries, we gather all the information and present it in a user-friendly format.
                    </p>
                    <p>
                        Keeping track of exam deadlines can be overwhelming, but Exam Portal is here to make it easy for you. We provide real-time updates on application deadlines, exam schedules, and result announcements. You will never miss an opportunity again with our timely notifications, helping you stay ahead in your journey.
                    </p>
                    <p>
                        At Exam Portal, your success is our mission. We are committed to providing you with the most accurate and up-to-date information, a user-friendly interface, and a platform that supports your aspirations every step of the way. Let Exam Portal be your guide and companion as you embark on your journey towards a successful and fulfilling career.
                    </p>
                    <p>
                        Join us today, and let's pave the way to your bright future together. Exam Portal - Where Dreams Meet Opportunities!
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
