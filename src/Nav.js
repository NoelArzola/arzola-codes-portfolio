import React from "react";
import { navItems } from "./data";
import { Link } from "react-router-dom";

const homeButton = "@arzolacodes";

const Nav = () => {
  const displayNav = navItems.map((item) => {
    return (
      <li key={item.title} className="hover:text-white px-4">
        <Link
          to={{
            pathname: item.navLink,
            hash: item.hash,
          }}
        >
          {item.title}
        </Link>
      </li>
    );
  });

  return (
    <div className="bg-black text-almost-white sticky top-0 opacity-80 backdrop-saturate-[180%] backdrop-blur-[20px]">
      <nav className="flex flex-row justify-between items-center max-w-7xl mx-auto px-4 py-4">
        <h2 className="font-jetbrains hover:text-white text-2xl text-red">
          <Link to="/">{homeButton}</Link>
        </h2>
        <ul className="hidden lg:flex">{displayNav}</ul>
        <ul className="flex flex-col lg:hidden">{displayNav}</ul>
      </nav>
    </div>
  );
};

export default Nav;
