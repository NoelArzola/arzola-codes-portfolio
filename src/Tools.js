import React from "react";

const Tools = () => {
  const toolsArray = [
    {
      name: "HTML5",
      icon: '<i class="fab fa-html5" aria-hidden="true"></i>',
    },
    {
      name: "CSS3",
      icon: '<i class="fab fa-css3" aria-hidden="true"></i>',
    },
    {
      name: "Javascript",
      icon: '<i class="fab fa-js" aria-hidden="true"></i>',
    },
    {
      name: "ReactJS",
      icon: '<i class="fab fa-react" aria-hidden="true"></i>',
    },
    {
      name: "Python",
      icon: '<i class="fab fa-python" aria-hidden="true"></i>',
    },
    {
      name: "NodeJS",
      icon: '<i class="fab fa-node-js" aria-hidden="true"></i>',
    },
    {
      name: "WordPress",
      icon: '<i class="fab fa-wordpress-simple" aria-hidden="true"></i>',
    },
    {
      name: "PHP",
      icon: '<i class="fab fa-php" aria-hidden="true"></i>',
    },
    {
      name: "SQL",
      icon: '<i class="fas fa-database" aria-hidden="true"></i>',
    },
    {
      name: "OpenCart",
      icon: '<i class="fab fa-opencart" aria-hidden="true"></i>',
    },
    {
      name: "Shopify",
      icon: '<i class="fab fa-shopify" aria-hidden="true"></i>',
    },
  ];

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
