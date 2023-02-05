import React from 'react';
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import "../styles/Footer.css";


function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <LinkedInIcon />
            <GitHubIcon />
            <EmailIcon />
            <TwitterIcon />
            <CallIcon />

        </div>
        <p> &copy; 2023 myPortfolio.com</p>
    </div>
  )
}

export default Footer