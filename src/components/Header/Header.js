import React, { Component } from "react";

import "./Header.css";

import logo from "../../assets/images/facebook-logo.png";
import profile from "../../assets/images/profile.svg";

class Header extends Component {
  state = {};

  render() {
    return (
      <header>
        <div class="header-container">
          <img src={logo} alt="Facebook" />
          <span>
            Meu Perfil
            <i class="material-icons">account_circle</i>
          </span>
        </div>
      </header>
    );
  }
}

export default Header;
