import React from "react";
import { projectArray } from "./data";

const displayProjects = projectArray.map((project) => (
  <li
    key={project.title}
    className="w-full md:w-2/3 lg:w-[33%] bg-almost-white mx-auto mb-5 lg:mb-0 pb-4"
  >
    <h4 className="font-bold text-2xl text-center mt-5">{project.title}</h4>
    <p className="text-base mt-5 px-8">{project.description}</p>
    <h5 className="text-base mt-5 px-8">Tools: {project.tools}</h5>
    <div className="flex justify-center mt-5">
      <a
        href={project.liveURL}
        className="text-link-blue hover:underline icon-chevronright"
      >
        View live<i className="pl-2 text-xs fa-solid fa-chevron-right"></i>
      </a>
      <a
        href={project.codeURL}
        className="text-link-blue hover:underline icon-chevronright ml-9"
      >
        View code<i className="pl-2 text-xs fa-solid fa-chevron-right"></i>
      </a>
    </div>
    <figure className="mt-5 px-8">
      <img src={project.imageURL} alt={project.imageALT} />
    </figure>
  </li>
));

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-lightest max-w-7xl mx-auto py-12">
      <h2 className="font-jetbrains text-3xl lg:text-4xl text-center">
        my projects
      </h2>
      <ul className="flex flex-col lg:flex-row justify-between mt-12">
        {displayProjects}
      </ul>
    </section>
  );
};

export default Projects;
