import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar is-light" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="http://www.zup.com.br/images/logoZup.png" alt="Zup" />
            </a>

            <button className="button navbar-burger is-light">
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Reembolso</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
