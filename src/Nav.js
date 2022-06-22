import React from "react";
import { navItems } from "./data";

const Nav = () => {
  const displayNav = navItems.map((item, index) => (
    <li key={item.title}>
      <a href={item.navLink}>{item.title}</a>
    </li>
  ));

  return (
    <nav className="flex flex-row">
      <h2 className="text-3xl">@arzolacodes</h2>
      <ul>{displayNav}</ul>
    </nav>
  );
};

export default Nav;
