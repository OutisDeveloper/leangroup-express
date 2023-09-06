import React, { Component } from "react";
import mainLogo from "../../assets/images/main-logo.svg";
import NavLink from "../data/navLink";
import NavLinks from "../links/NavLinks";
export class Header extends Component {
  render() {
    return (
      <>
        <header id="header">
          <nav className="container navContainer">
            <div className="navLeft">
              <img src={mainLogo} alt="" />
            </div>
            <div className="navMiddle">
              <ul className="navList">
                {NavLink.map((el, index) => (
                  <NavLinks {...el} id={index} />
                ))}
              </ul>
            </div>
            <div className="navRight">
              <span>RU</span>
              <span>EN</span>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
