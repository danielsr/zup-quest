import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { actions } from "../store/actions";
import { Page, Field, Button, Grid } from "../components";

class Refund extends Component {
  finalize = this.props.handleSubmit(values => {
    console.log(values);
  });

  fields = [
    { name: "desc", label: "Descrição" },
    { name: "nf", label: "Nota Fiscal" },
    { name: "value", label: "Valor (R$)" }
  ];

  options = [{ value: 1, name: "Itau" }];

  render() {
    return (
      <Page title="Solicitação de Reembolso">
        <div className="columns">
          <div className="column">
            <Field name="userName" label="Nome" />
          </div>
          <div className="column">
            <Field name="userEmail" label="E-mail" />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Field name="totalValue" label="Valor Total (R$)" />
          </div>
          <div className="column">
            <Field
              name="bank"
              label="Banco"
              type="select"
              options={this.options}
            />
          </div>
          <div className="column">
            <Field name="agency" label="Agencia" />
          </div>
          <div className="column">
            <Field name="account" label="Conta Corrente" />
          </div>
        </div>
        <div className="field">
          <Link className="button" to="/refund/new">
            Adicionar Gasto
          </Link>
        </div>
        <Grid
          fields={this.fields}
          items={this.props.items}
          keyField="nf"
          editRoute="/refund/edit/"
          deleteRoute="/refund/delete/"
        />
        <div className="field is-grouped">
          <div className="control">
            <Button
              className="is-primary"
              text="Finalizar Solicitação"
              onClick={this.finalize}
            />
          </div>
          <div className="control">
            <Button text="Cancelar Solicitação" />
          </div>
        </div>
      </Page>
    );
  }
}

Refund = reduxForm({
  form: "refund",
  enableReinitialize: true
})(Refund);

function mapStateToProps(state) {
  return {
    user: state.user,
    initialValues: {
      userName: state.user.name,
      userEmail: state.user.email
    },
    items: state.form
      ? state.form.refund ? state.form.refund.values.items : null
      : null
  };
}

Refund = connect(mapStateToProps, actions)(Refund);

export default Refund;
