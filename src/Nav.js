import React from "react";
import { navItems } from "./data";

const Nav = () => {
  const displayNav = navItems.map((item, index) => (
    <li key={item.title} className="hover:text-white px-4">
      <a href={item.navLink}>{item.title}</a>
    </li>
  ));

  return (
    <div className="bg-black text-almost-white">
      <nav className="flex flex-row justify-between items-center max-w-7xl mx-auto px-4 py-4">
        <h2 className="hover:text-white text-2xl text-red">@arzolacodes</h2>
        <ul className="flex">{displayNav}</ul>
      </nav>
    </div>
  );
};

export default Nav;
