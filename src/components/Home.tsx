import React from "react";
import Hero from "./Hero";
import Tools from "./Tools";
import Projects from "./Projects";
import Bio from "./Bio";
import Testimonies from "./Testimonies";

const Home = () => {
  return (
    <main role="main">
      <Hero />
      <Tools />
      <Projects />
      <Testimonies />
      <Bio />
    </main>
  );
};

export default Home;
