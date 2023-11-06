import React from "react";
import { navItems } from "../data/data";
import { HashLink as Link } from "react-router-hash-link";
import { useMatch } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
    this.handleClick = this.handleClick.bind(this);
  }

  homeButton = "@arzolacodes";

  displayNav = navItems.map((item) => {
    return (
      <li key={item.title} className="hover:text-white px-4 py-6 lg:py-0">
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

  handleClick = () => {
    if (!this.state.isToggled) {
      this.setState({
        isToggled: true,
      });
    } else {
      this.setState({
        isToggled: false,
      });
    }
  };

  render() {
    return (
      <div
        className={
          this.state.isToggled
            ? "bg-black text-almost-white sticky top-0 backdrop-saturate-[180%] backdrop-blur-[20px] ease-in-out duration-1000"
            : "bg-black text-almost-white sticky top-0 opacity-80 backdrop-saturate-[180%] backdrop-blur-[20px] ease-out duration-500"
        }
      >
        <nav
          className="h-12 lg:h-full flex flex-row justify-between items-center max-w-7xl mx-auto pl-4 lg:px-4 py-4"
          role="navigation"
        >
          <h2 className="font-jetbrains hover:text-white text-lg lg:text-2xl text-red">
            <Link to="/">{this.homeButton}</Link>
          </h2>
          <ul className="hidden lg:flex">{this.displayNav}</ul>
          <button
            className={
              this.state.isToggled
                ? "inline-block lg:hidden hamburger hamburger--spin is-active"
                : "inline-block lg:hidden hamburger hamburger--spin"
            }
            type="button"
            onClick={this.handleClick}
            aria-label="Mobile Navigation Button"
            aria-controls="navigation"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </nav>
        <ul
          id="navigation"
          className={
            this.state.isToggled
              ? "flex flex-col lg:hidden items-center justify-center h-screen border-almost-white border-t z-10 sticky bg-black w-full text-2xl"
              : "hidden"
          }
          onClick={this.handleClick}
        >
          {this.displayNav}
        </ul>
      </div>
    );
  }
}

export default Nav;
