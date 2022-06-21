import React from "react";

const Footer = () => {
  return (
    <footer>
      <h2>hello, world</h2>
      <div>
        <div>
          <h3>Hire Me</h3>
          <p>number</p>
          <p>email</p>
        </div>
        <div>
          <h3>Follow Me</h3>
          <p>social</p>
          <p>social</p>
          <p>social</p>
        </div>
        <div>
          <h3>Meet Me</h3>
          <p>city, state</p>
          <p>something catchy</p>
        </div>
      </div>
      <h5>Copyright {new Date().getFullYear()} | Arzola Solutions, LLC</h5>
    </footer>
  );
};

export default Footer;
