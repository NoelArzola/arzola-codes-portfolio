import React from "react";
import { toolsArray } from "./data";

const Tools = () => {
  const displayTools = toolsArray.map((tool, index) => (
    <li key={index}>
      {tool.icon}
      <h3>{tool.name}</h3>
    </li>
  ));

  return (
    <section>
      <h2>what I work with</h2>
      <ul>{displayTools}</ul>
    </section>
  );
};

export default Tools;
