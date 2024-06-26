import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
  return (
    <header
      className="max-w-7xl mx-auto px-4 lg:px-24 py-12 md:py-32 bg-gray-lightest"
      role="banner"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="font-jetbrains text-3xl lg:text-5xl">Hey, I'm Noel</h1>
        <p className="text-2xl lg:text-3xl mt-5">
          I am a full-stack software engineer. I build mobile apps, websites,
          and web apps
        </p>
        <div className="mt-4 flex justify-center">
          <Link
            to="/services"
            className="text-xl lg:text-3xl text-link-blue hover:underline icon-chevronright"
          >
            View services{" "}
            <i className="pl-2 text-xl fa-solid fa-chevron-right"></i>
          </Link>
          <Link
            to={{
              pathname: "/",
              hash: "contact",
            }}
            className="text-xl lg:text-3xl text-link-blue hover:underline icon-chevronright ml-9"
          >
            Contact me{" "}
            <i className="pl-2 text-xl fa-solid fa-chevron-right"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
