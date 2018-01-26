import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar is-light" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src="http://www.zup.com.br/images/logoZup.png" alt="Zup" />
            </Link>
            <button className="button navbar-burger is-light">
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to="/refund" className="navbar-item">
                Reembolso
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
