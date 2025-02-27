/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Link } from "react-scroll";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const NavbarArch = ({ navbarRef, theme }) => {
  return (
    <nav className="navbar navbar-expand-lg" ref={navbarRef}>
      <div className="container">
        <a className="logo" href="/">
          {theme ? (
            theme === "themeL" ? (
              <img src={appData.lightLogo} alt="logo" />
            ) : (
              <img src={appData.lightLogo} alt="logo" />
            )
          ) : (
            <img src={appData.lightLogo} alt="logo" />
          )}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={handleMobileDropdown}
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="po-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="team-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="testimonials-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="ml-3">
            {theme === "themeL" ? (
              <a
                href="/"
                className="theme-icon"
                style={{ fontSize: "1.1rem", color: "#fff" }}
              >
                <i className="fas fa-moon"></i>
              </a>
            ) : (
              <a
                href="/homepage/home8-light"
                className="theme-icon"
                style={{ fontSize: "1.1rem", color: "#fff" }}
              >
                <i className="fas fa-sun"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarArch;
