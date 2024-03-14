import React from 'react';
import './App.css';
import SkillsSection from './SkillsSection';
import Timeline from './Timeline';
import Dropdown from './Dropdown';
import { Carousel } from "./components/Carousel";
import { slides } from "./data/carouselData.json";

const App = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="app-container">
      <div className="profile-header">
        <img src="src/images/profilePic2.png" alt="Profile" className="profile-photo" />
        <h1 className="h1" id="getToKnowMe">hey,&nbsp;&nbsp;i'm kevin.</h1>
      </div>
      
      {/* Dropdown navigation */}
      <Dropdown />
      
      <div className="getToKnowMe"> 
        <p><strong>I am a first-generation Asian-American; my parents moved here from Harbin, China in 2002. I was born in Milwaukee, Wisconsin in 2005, and I have lived there all my life. In 2023, I moved to Durham, North Carolina to attend Duke University where I am studying Computer Science and Statistics. In my free time, I enjoy practicing piano, playing soccer with friends, watching the Milwaukee Bucks, and traveling to new places. I am very interested in anything tech, and I am open to any opportunities where I can develop my skills. Feel free to connect with me on LinkedIn, or contact me on social media!</strong></p>
        <SkillsSection/>
      </div>

      <div id="timeLine">
        <Timeline />
      </div>

      <div id="pictures" className="timeline-container">
        <h1 className='header' id="picture">Picture Carousel</h1>
        <Carousel data={slides} />
        <p>Here are some pics of me and my friends!</p>
      </div>

      {/* Back to top button */}
      <button className="back-to-top" onClick={scrollToTop}>Back to Top</button>
    </div>
  );
}

export default App;
