import React from "react";
import { useMatch } from "react-router-dom";
import { contactInfo, followMe, meetMe } from "../data/data";

const Footer = () => {
  const match = useMatch("/spill");

  if (match) return;

  const displaySocial = followMe.map((item) => (
    <a
      href={item.url}
      key={item.name}
      className="h-12 w-12 flex justify-center items-center px-1"
      target="_blank"
      rel="noreferrer"
      aria-label={item.aria}
    >
      {item.icon}
    </a>
  ));

  return (
    <footer
      id="contact"
      className="bg-almost-white pt-12 pb-4"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-jetbrains text-3xl lg:text-4xl text-center">
          contact
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-7">
          <div className="md:w-1/3 text-center">
            <h3 className="text-2xl mb-1 md:mb-4">{contactInfo.heading}</h3>
            <p className="hover:underline">{contactInfo.phoneNumber}</p>
            <p className="hover:underline">{contactInfo.email}</p>
          </div>
          <div className="md:w-1/3 text-center mt-7 md:mt-0">
            <h3 className="text-2xl mb-1 md:mb-4">follow me</h3>
            <div className="flex justify-center items-center">
              {displaySocial}
            </div>
          </div>
          <div className="md:w-1/3 text-center mt-7 md:mt-0">
            <h3 className="text-2xl mb-1 md:mb-4">{meetMe.heading}</h3>
            <p>{meetMe.cityState}</p>
            <p>{meetMe.tagline}</p>
          </div>
        </div>
        <h4 className="text-center border-gray-for-sure border-t mt-8 pt-4 pb-0.5">
          Built with React <i className="fab fa-react" aria-hidden="true"></i>
          <span className="hidden">Javascript!</span> | Copyright{" "}
          {new Date().getFullYear()} | Arzola Solutions, LLC
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
