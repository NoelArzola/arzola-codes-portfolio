import React from "react";

const Hero = () => {
  return (
    <header
      className="max-w-7xl mx-auto px-4 lg:px-24 py-12 md:py-32 bg-gray-lightest"
      role="banner"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="font-jetbrains text-3xl lg:text-5xl">hey, I'm Noel</h1>
        <p className="text-2xl lg:text-3xl mt-5">
          I'm a full-stack developer, take a look around and if we're a good fit{" "}
          <span>let's collaborate</span>
        </p>
        <div className="mt-4 flex justify-center">
          <a
            className="text-xl lg:text-3xl text-link-blue hover:underline icon-chevronright"
            href="/services"
          >
            View services
            <i className="pl-2 text-xl fa-solid fa-chevron-right"></i>
          </a>
          <a
            className="text-xl lg:text-3xl text-link-blue hover:underline icon-chevronright ml-9"
            href="#contact"
          >
            Contact me<i className="pl-2 text-xl fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
