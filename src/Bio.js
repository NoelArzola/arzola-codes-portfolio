import React from "react";
import { bio } from "./data";

const Bio = () => {
  return (
    <section>
      <h2>About me</h2>
      <div>
        <h3>{bio.heading}</h3>
        <p>{bio.paragraph}</p>
        <figure>
          <img src={bio.imageURL} alt="Me smiling in a dress shirt" />
        </figure>
      </div>
    </section>
  );
};

export default Bio;
