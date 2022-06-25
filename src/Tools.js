import React from "react";
import { toolsArray } from "./data";

const Tools = () => {
  const displayTools = toolsArray.map((tool, index) => (
    <li
      key={index}
      className="text-3xl flex flex-col justify-center items-center px-4 py-8 w-1/4"
    >
      {tool.icon}
      <h3 className="pt-4">{tool.name}</h3>
    </li>
  ));

  return (
    <section className="max-w-7xl mx-auto bg-black text-almost-white py-12">
      <h2 className="text-4xl text-center">what I work with</h2>
      <ul className="text-gray-for-sure flex flex-row flex-wrap justify-center mt-8">
        {displayTools}
      </ul>
    </section>
  );
};

export default Tools;
