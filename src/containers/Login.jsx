import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { actions } from "../store/actions";
import { Modal, Field, Button } from "../components";
import { required } from "../util/formValid";

class Login extends Component {
  buttons = () => {
    return (
      <div>
        <Button className="is-primary" text="Login" onClick={this.login} />
        <Link to="/register" className="button">
          Cadastrar
        </Link>
      </div>
    );
  };

  login = this.props.handleSubmit(values => {
    this.props.login(values);
  });

  render() {
    return (
      <Modal title="Fazer Login" buttons={this.buttons}>
        <Field name="email" label="E-mail" validate={[required]} />
        <Field name="pwd" label="Senha" type="password" validate={[required]} />
      </Modal>
    );
  }
}

Login = reduxForm({
  form: "login"
})(Login);

Login = connect(null, actions)(Login);

export default Login;
