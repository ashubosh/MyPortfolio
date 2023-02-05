import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, I am Ashutosh Kumar Singh.</h2>
        <div className='prompt'>
          <p> An enthusiastic software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Languages </h2>
            <span> Javascript, C, C++</span>
          </li>
          <li className='item'>
            <h2> Back-End </h2>
            <span>NodeJS, ExpressJS, MongoDB, AWS S3, REDIS, Postman</span>
          </li>
          <li className='item'>
            <h2> Front-End </h2>
            <span> ReactJS, HTML, CSS, MaterialUI</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home