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
        <h4 className="text-center border-gray-for-sure border-t mt-4 pt-8 pb-0.5">
          Built with React <i className="fab fa-react" aria-hidden="true"></i>
          <span className="hidden">JavaScript!</span> and TypeScript{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="20"
            viewBox="0 0 50 50"
            className="inline w-4 mb-1"
          >
            <path d="M 5 4 A 1.0001 1.0001 0 0 0 4 5 L 4 45 A 1.0001 1.0001 0 0 0 5 46 L 45 46 A 1.0001 1.0001 0 0 0 46 45 L 46 5 A 1.0001 1.0001 0 0 0 45 4 L 5 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 15 23 L 15 26.445312 L 20 26.445312 L 20 42 L 24 42 L 24 26.445312 L 29 26.445312 L 29 23 L 15 23 z M 36.691406 23.009766 C 33.576782 22.997369 30.017578 23.941219 30.017578 28.324219 C 30.017578 34.054219 37.738281 34.055625 37.738281 36.640625 C 37.738281 36.885625 37.842187 38.666016 35.117188 38.666016 C 32.392187 38.666016 30.121094 36.953125 30.121094 36.953125 L 30.121094 41.111328 C 30.121094 41.111328 42.001953 44.954062 42.001953 36.289062 C 42.000953 30.664063 34.208984 30.945391 34.208984 28.150391 C 34.208984 27.067391 34.978375 26.054687 37.109375 26.054688 C 39.240375 26.054688 41.126953 27.3125 41.126953 27.3125 L 41.267578 23.607422 C 41.267578 23.607422 39.113892 23.019408 36.691406 23.009766 z"></path>
          </svg>{" "}
        </h4>
        <h4 className="text-center pb-4">
          Copyright {new Date().getFullYear()} | Arzola Solutions, LLC
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
