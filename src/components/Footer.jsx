import React, { Component } from "react";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    if (!this.props.user) {
      return null;
    }
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>Zup</strong> - Copyright © 2018
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

Footer = connect(mapStateToProps)(Footer);

export default Footer;
