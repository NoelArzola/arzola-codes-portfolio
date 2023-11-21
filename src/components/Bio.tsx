import React from "react";
import { bio } from "../data/data";

const Bio = () => {
  return (
    <aside
      id="about"
      className="max-w-7xl mx-auto bg-black text-almost-white py-24"
    >
      <h2 className="font-jetbrains text-3xl lg:text-4xl text-center">
        about me
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-8 md:px-28">
        <div className="order-2 lg:order-1 lg:w-2/3 mt-5 lg:mt-0 px-4 lg:px-24">
          <h3 className="text-xl">{bio.heading}</h3>
          <p className="mt-5">{bio.paragraph}</p>
        </div>
        <figure className="order-1 lg:order-2 w-1/2 lg:w-1/3 px-8">
          <img
            src={bio.imageURL}
            alt="Me smiling in a dress shirt"
            className="rounded-full"
          />
        </figure>
      </div>
    </aside>
  );
};

export default Bio;
