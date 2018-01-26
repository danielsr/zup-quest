import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "../components";

class Login extends Component {
  buttons = () => {
    return (
      <div>
        <Button className="is-primary" text="Login" />
        <Link to="/register" className="button">
          Cadastrar
        </Link>
      </div>
    );
  };

  render() {
    return <Modal title="Fazer Login" buttons={this.buttons} />;
  }
}

export default Login;
