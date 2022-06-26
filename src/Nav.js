import React from "react";
import { navItems } from "./data";

const Nav = () => {
  const displayNav = navItems.map((item, index) => (
    <li key={item.title} className="hover:text-white px-4">
      <a href={item.navLink}>{item.title}</a>
    </li>
  ));

  return (
    <div className="bg-black text-almost-white sticky top-0 opacity-80">
      <nav className="flex flex-row justify-between items-center max-w-7xl mx-auto px-4 py-4">
        <h2 className="font-jetbrains hover:text-white text-2xl text-red">
          <a href="/">@arzolacodes</a>
        </h2>
        <ul className="hidden lg:flex">{displayNav}</ul>
        <ul className="flex flex-col lg:hidden">{displayNav}</ul>
      </nav>
    </div>
  );
};

export default Nav;
