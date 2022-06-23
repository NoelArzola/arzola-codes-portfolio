import React from "react";

const Hero = () => {
  return (
    <header className="max-w-7xl mx-auto px-4 lg:px-24 py-12 lg:py-32 bg-gray-lightest">
      <h1 className="text-5xl">hey, I'm Noel</h1>
      <p className="text-3xl mt-5">
        Welcome to my site! I'm a full-stack developer, take a look around and
        if we're a good fit <span>let's collaborate</span>
      </p>
      <div className="mt-2 flex justify-center">
        <a
          className="text-3xl text-link-blue hover:underline icon-chevronright"
          href="#"
        >
          View services
        </a>
      </div>
    </header>
  );
};

export default Hero;
