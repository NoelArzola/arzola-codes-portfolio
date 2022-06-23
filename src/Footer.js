import React from "react";
import { contactInfo, followMe, meetMe } from "./data";

const Footer = () => {
  const displaySocial = followMe.map((item) => (
    <a href={item.url} key={item.name}>
      {item.icon}
    </a>
  ));

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
          <h3>follow me</h3>
          <div>{displaySocial}</div>
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
