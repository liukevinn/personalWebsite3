import React from 'react';
import './css/Timeline.css';

const events = [
  { id: 1, year: 'Sept 2019', title: 'Eisenhower High School', description: 'Began high school at New Berlin Eisenhower. Throughout high school, I participated and led clubs such as National Honors Society, DECA, and Student Union.'},
  { id: 2, year: 'Jun 2020', title: 'Milwaukee Stem Program', description: 'Established STEM program to foster exploratory education for 100+ participants in lower-income areas of Milwaukee. Organized 3 distinct interactive programs including 3D Printing, Aeronautics, & Astronomy. Created and oversaw a mentorship program connecting young STEM students with teachers and professors.' },
  { id: 3, year: 'Dec 2022', title: 'Wisconsin State Soccer Championship', description: "Won the Division 3 Soccer State Championship, bringing home our school's first ever soccer championship." },
  { id: 4, year: 'Jan 2023', title: 'University of Helsinki Online FullStackOpen Coding Bootcamp', description: 'Studied and reviewed the basics and features of React, Javascript, HTML, and CSS to create full stack application projects. Built applications such as a weather app, phonebook, and notes app, and deployed them to the internet' },
  { id: 5, year: 'Sept 2023', title: 'Duke University', description: 'Moved to Durham, NC to attend Duke University. I am currently pursuing a B.S in Computer Science and a B.S in Statistical Science.<br /><br /><strong>Relevant Coursework:</strong><br />• Data Structures and Algorithms<br />• Computer Architecture<br />• Regression Analysis'},
  { id: 6, year: 'Dec 2023', title: 'High-Energy Particle Collision Program', description: 'Spearheaded weekly meetings of over 20 members to discuss particle research information and various findings. Researched Electroweak interactions and learned about ATLAS and Electron scattering experiments. Completed external research with fellow program members to go beyond the scope of the research program.' },
  { id: 7, year: 'Jan 2024', title: 'Duke Applied Machine Learning', description: 'Collaborated closely with a small group to implement new features on the tent-shift-schedule website for over 100 users. Created an export to excel feature which takes in recorded group information from website and creates a formatted excel sheet' },
  { id: 8, year: 'Feb 2024', title: 'Catalyst', description: 'Joined Catalyst, a social and pre-professional community of tech enthusiasts. I am currently working on an entrepeneurial project. More to come on this!' }
];

const TimelineEvent = ({ event }) => {
  const alignment = event.id % 2 === 0 ? 'right' : 'left';
  return (
    <div className={`timeline-event timeline-event-${alignment}`}>
      <div className={`timeline-event-content content-${alignment}`}>
        <span className="timeline-event-year">{event.year}</span>
        <h3>{event.title}</h3>
        <p dangerouslySetInnerHTML={{__html: event.description}}></p>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h1 className='header'>here's an outline of my life . . .</h1>
      {events.map(event => (
        <TimelineEvent event={event} key={event.id} />
      ))}
    </div>
  );
};

export default Timeline;
