import React from 'react'
import Exam from './Exam'

const Live = () => {
    const examData = [ //This is a placeholder and will be completed after the backend is implemented.
        {
            examName: 'Your Exam Name',
            examDescription: 'Description of the exam goes here...',
            lastDate: new Date("2024-03-25"),
            links: [
                {
                    heading: 'Link 1',
                    url: 'https://example.com/link1',
                },
                {
                    heading: 'Link 2',
                    url: 'https://example.com/link2',
                },
            ],
        },
        {
            examName: 'Your Exam Name',
            examDescription: 'Description of the exam goes here...',
            lastDate: new Date("2027-03-25"),
            links: [
                {
                    heading: 'Link 1',
                    url: 'https://example.com/link1',
                },
                {
                    heading: 'Link 2',
                    url: 'https://example.com/link2',
                },
            ],
        },
        {
            examName: 'Your Exam Name',
            examDescription: 'Description of the exam goes here...',
            lastDate: new Date("2023-03-25"),
            links: [
                {
                    heading: 'Link 1',
                    url: 'https://example.com/link1',
                },
                {
                    heading: 'Link 2',
                    url: 'https://example.com/link2',
                },
            ],
        },
        {
            examName: 'Your Exam Name',
            examDescription: 'Description of the exam goes here...',
            lastDate: new Date("2023-08-05"),
            links: [
                {
                    heading: 'Link 1',
                    url: 'https://example.com/link1',
                },
                {
                    heading: 'Link 2',
                    url: 'https://example.com/link2',
                },
            ],
        },
        {
            examName: 'Your Exam Name',
            examDescription: 'Description of the exam goes here...',
            lastDate: new Date("2023-07-31"),
            links: [
                {
                    heading: 'Link 1',
                    url: 'https://example.com/link1',
                },
                {
                    heading: 'Link 2',
                    url: 'https://example.com/link2',
                },
            ],
        }
    ];
    const today = new Date();
    const upcomingExams = examData.filter((exam) => exam.lastDate >= new Date(today.getFullYear(), today.getMonth(), today.getDate()));
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {upcomingExams.map((exam, index) => (
                <Exam key={index} exam={exam} />
            ))}
        </div>
    )
}

export default Live