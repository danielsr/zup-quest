import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { actions } from "../store/actions";
import { Modal, Field, Button } from "../components";
import { required } from "../util/formValid";

class Register extends Component {
  buttons = () => {
    return (
      <div>
        <Button
          className="is-primary"
          text="Cadastrar"
          onClick={this.register}
        />
        <Link to="/login" className="button">
          Cancelar
        </Link>
      </div>
    );
  };

  register = this.props.handleSubmit(values => {
    this.props.saveUser(values);
  });

  render() {
    return (
      <Modal title="Cadastro" buttons={this.buttons}>
        <Field name="name" label="Nome" validate={[required]} />
        <Field name="email" label="E-mail" validate={[required]} />
        <Field name="pwd" label="Senha" type="password" validate={[required]} />
      </Modal>
    );
  }
}

Register = reduxForm({
  form: "register"
})(Register);

function mapStateToProps(state) {
  return { user: state.user };
}

Register = connect(mapStateToProps, actions)(Register);

export default Register;
