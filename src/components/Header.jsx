import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../store/actions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownLogout: false,
      menuMobile: false
    };
  }

  componentWillMount() {
    if (!this.props.user) {
      const user = localStorage.getItem("user");
      if (user) {
        this.props.setUser(JSON.parse(user));
      }
    }
  }

  logout = () => {
    this.props.logout();
  };

  render() {
    if (!this.props.user) {
      return null;
    }
    return (
      <nav className="navbar is-light" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src="http://www.zup.com.br/images/logoZup.png" alt="Zup" />
            </Link>
            <button
              className="button navbar-burger is-light"
              onClick={() => {
                this.setState({
                  menuMobile: !this.state.menuMobile
                });
              }}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div
            className={
              "navbar-menu" + (this.state.menuMobile ? " is-active" : "")
            }
          >
            <div className="navbar-start">
              <Link to="/refunds" className="navbar-item">
                Solicitações de Reembolso
              </Link>
              <Link to="/approval" className="navbar-item">
                Aprovação de Solicitações
              </Link>
              <Link to="/users" className="navbar-item">
                Usuários
              </Link>
            </div>
            <div className="navbar-end">
              <div
                className={
                  "navbar-item has-dropdown" +
                  (this.state.dropDownLogout ? " is-active" : "")
                }
              >
                <a
                  className="navbar-link"
                  onClick={() => {
                    this.setState({
                      dropDownLogout: !this.state.dropDownLogout
                    });
                  }}
                >
                  {this.props.user.name}
                </a>
                <div className="navbar-dropdown">
                  <a className="navbar-item" onClick={this.logout}>
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

Header = connect(mapStateToProps, actions)(Header);

export default Header;
