import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Faq.css'

const Faq = () => {
    return (
        <div className='outer'>
            <Header head1={'Login'} head2={'Register'} />
            <div className='faq-container'>
                <div className='container'>
                    <h1 className='faq-title'>Frequently Asked Questions (FAQ)</h1>

                    <div className='faq-item'>
                        <h2 className='faq-question'>Q: What is Exam Portal?</h2>
                        <p className='faq-answer'>
                            A: Exam Portal is a comprehensive platform that provides information about various education and career-related exams and opportunities. It caters to students, job seekers, and professionals looking to achieve their academic and career aspirations.
                        </p>
                    </div>

                    <div className='faq-item'>
                        <h2 className='faq-question'>Q: How can I create an account on Exam Portal?</h2>
                        <p className='faq-answer'>
                            A: Creating an account on Exam Portal is easy. Click on the "Register" button, set a username, provide your email address, and set a password. Once registered, you can start tracking your applied exams.
                        </p>
                    </div>

                    <div className='faq-item'>
                        <h2 className='faq-question'>Q: Is Exam Portal free to use?</h2>
                        <p className='faq-answer'>
                            A: Yes, Exam Portal is completely free to use. You can access exam information, application deadlines, and track your exams without any charges.
                        </p>
                    </div>

                    <div className='faq-item'>
                        <h2 className='faq-question'>Q: Can I receive notifications about upcoming exams?</h2>
                        <p className='faq-answer'>
                            A: Absolutely! Exam Portal provides real-time notifications for upcoming exams, application deadlines, and result announcements. Stay informed and never miss an important update.
                        </p>
                    </div>

                    <div className='faq-item'>
                        <h2 className='faq-question'>Q: Can I track the status of my applied exams?</h2>
                        <p className='faq-answer'>
                            A: Yes, Exam Portal offers a tracking feature that allows you to monitor the status of your applied exams. Keep an eye on the application status and result announcements in real-time.
                        </p>
                    </div>

                    <div className='faq-item'>
                        <h2 className='faq-question'>Q: How frequently is the exam database updated?</h2>
                        <p className='faq-answer'>
                            A: The exam database on Exam Portal is regularly updated to ensure the latest and accurate information is available to users. We strive to keep the platform up-to-date with new exam announcements and changes in exam schedules.
                        </p>
                    </div>

                    <div className='faq-item'>
                        <h2 className='faq-question'>Q: Can I recommend exams to be added to the portal?</h2>
                        <p className='faq-answer'>
                            A: Absolutely! We welcome user suggestions for new exams to be added to our database. If you come across an exam that you think should be included, feel free to contact our support team with the details.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Faq;
