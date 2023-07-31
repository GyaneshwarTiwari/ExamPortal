import React from 'react';
import '../styles/Exam.css';

const Exam = ({ exam }) => {
    const { examName, examDescription, lastDate, links } = exam;
    const formattedLastDate = lastDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
        <div className="exam-card">
            <h2 className="exam-heading">{examName}</h2>
            <p className="exam-description">{examDescription}</p>
            <p className="last-date">Last Date: {formattedLastDate}</p>
            <div>
                <h3 className="exam-links">Links:</h3>
                <ul>
                    {links.map((link, index) => (
                        <li key={index} className="exam-link">
                            <span className="link-name">{link.heading}: </span>
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                {link.url}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Exam;
