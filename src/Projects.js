import React from "react";
import { projectArray } from "./data";

const displayProjects = projectArray.map((project) => (
  <li key={project.title} className="w-[33%] bg-almost-white pb-4">
    <h4 className="font-bold text-2xl text-center mt-5">{project.title}</h4>
    <p className="text-base mt-5 px-8">{project.description}</p>
    <h5 className="text-base mt-5 px-8">Tools: {project.tools}</h5>
    <div className="flex justify-center mt-5">
      <a
        href={project.liveURL}
        className="text-link-blue hover:underline icon-chevronright"
      >
        View live
      </a>
      <a
        href={project.codeURL}
        className="text-link-blue hover:underline icon-chevronright ml-4"
      >
        View code
      </a>
    </div>
    <figure className="mt-5 px-8">
      <img src={project.imageURL} alt={project.imageALT} />
    </figure>
  </li>
));

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto pt-12">
      <h2 className="text-4xl text-center">my projects</h2>
      <ul className="flex justify-between mt-5">{displayProjects}</ul>
    </div>
  );
};

export default Projects;
