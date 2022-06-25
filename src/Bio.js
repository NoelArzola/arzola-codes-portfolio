import React from "react";
import { bio } from "./data";

const Bio = () => {
  return (
    <section className="max-w-7xl mx-auto bg-black text-almost-white py-12">
      <h2 className="text-3xl text-center">about me</h2>
      <div className="flex justify-center items-center">
        <div className="w-2/3">
          <h3>{bio.heading}</h3>
          <p>{bio.paragraph}</p>
        </div>
        <figure className="w-1/3 px-5">
          <img src={bio.imageURL} alt="Me smiling in a dress shirt" />
        </figure>
      </div>
    </section>
  );
};

export default Bio;
