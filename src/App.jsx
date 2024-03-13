import React, { useState } from 'react';
import './App.css'; // Assuming your CSS is in App.css
import Header from './Header';
import SkillsSection from './SkillsSection';
import Timeline from './Timeline';

const PageOne = () => (
  <div className="page-one-content">
    <h1 className="text">Get to know me!</h1>
    <p>
      <strong>I was born in Milwaukee, Wisconsin in 2005. In 2023, I moved to Durham, North Carolina to attend Duke University. In my free time, I enjoy playing piano, kicking soccer balls, and watching the NBA. I'm super excited to learn and grow, and am open to any opportunities where I can develop my skills. Feel free to connect with me on LinkedIn, or contact me!</strong>
    </p>
    <SkillsSection/>
    

  </div>
);


const PageTwo = () =>
<div>
<h1>Here's what I've been up to!</h1>
        <Timeline/>
</div>;

const App = () => {
  const [currentPage, setCurrentPage] = useState(-1); // -1 indicates the home page
  const pages = [<PageOne />, <PageTwo />];

  const goToNextPage = () => {
    setCurrentPage((prevPage) => {
      // If on the last page, return to the home page (-1)
      if (prevPage === pages.length - 1) {
        return -1;
      } else {
        // Otherwise, proceed to the next page
        return (prevPage + 1) % pages.length;
      }
    });
  };

  return (
    <div className="profile-page">
      <Header />
      {currentPage === -1 && (
        <>
          <div className="profile-header">
            <img src="src/images/profilePic2.png" alt="Profile" className="profile-photo" />
            <h1>Hey, I'm Kevin.</h1>
          </div>
          <div className="profile-info">
            <p><strong>Email address:</strong> kevinwliuu@gmail.com</p>
            <p><strong>Web:</strong> www.linkedin.com/in/liukevin</p>
          </div>
          <div className="profile-sidebar">{/* Add icons and links here */}</div>
        </>
      )}

      <div className="next-page-arrow" onClick={goToNextPage}>
        &#9654; {/* Right-pointing arrow */}
      </div>

      {currentPage !== -1 && (
        <div className="page-content">
          {pages[currentPage]}
        </div>
      )}
    </div>
  );
};

export default App;
