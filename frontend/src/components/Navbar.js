import React from "react";
import LOGO from "../assets/LRDC_logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  //   const [active, setActive] = useState("navBar");
  //Function to toggle NavBar
  //   const showNav = () => {
  //     setActive("navBar activeNavBar");
  //   };

  //   //Function to remove NavBar
  //   const removeNavbar = () => {
  //     setActive("navBar");
  //   };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <img className="icon" src={LOGO} alt="LRDC logo" />
          </a>
        </div>
        <div className="active">
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Package
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
