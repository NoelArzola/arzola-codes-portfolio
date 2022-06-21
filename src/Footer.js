import React from "react";
import { contactInfo, followMe, meetMe } from "./data";

const Footer = () => {
  return (
    <footer>
      <h2>hello, world</h2>
      <div>
        <div>
          <h3>{contactInfo.heading}</h3>
          <p>{contactInfo.phoneNumber}</p>
          <p>{contactInfo.email}</p>
        </div>
        <div>
          <h3>{followMe.heading}</h3>
          <div>
            <a href={followMe.twitter.url}>{followMe.twitter.icon}</a>
            <a href={followMe.gitHub.url}>{followMe.gitHub.icon}</a>
            <a href={followMe.linkedIn.url}>{followMe.linkedIn.icon}</a>
          </div>
        </div>
        <div>
          <h3>{meetMe.heading}</h3>
          <p>{meetMe.location}</p>
          <p>{meetMe.tagline}</p>
        </div>
      </div>
      <h5>Copyright {new Date().getFullYear()} | Arzola Solutions, LLC</h5>
    </footer>
  );
};

export default Footer;
