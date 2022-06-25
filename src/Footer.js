import React from "react";
import { contactInfo, followMe, meetMe } from "./data";

const Footer = () => {
  const displaySocial = followMe.map((item) => (
    <a href={item.url} key={item.name}>
      {item.icon}
    </a>
  ));

  return (
    <footer className="bg-almost-white pt-12 pb-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-center">hello, world</h2>
        <div className="flex justify-center mt-7">
          <div className="w-1/3 text-center">
            <h3 className="text-2xl">{contactInfo.heading}</h3>
            <p>{contactInfo.phoneNumber}</p>
            <p>{contactInfo.email}</p>
          </div>
          <div className="w-1/3 text-center">
            <h3 className="text-2xl">follow me</h3>
            <div>{displaySocial}</div>
          </div>
          <div className="w-1/3 text-center">
            <h3 className="text-2xl">{meetMe.heading}</h3>
            <p>{meetMe.cityState}</p>
            <p>{meetMe.tagline}</p>
          </div>
        </div>
        <h5 className="text-center border-gray-for-sure border-t mt-8 pt-4 pb-0.5">
          Copyright {new Date().getFullYear()} | Arzola Solutions, LLC
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
