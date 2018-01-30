import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm, FieldArray } from "redux-form";
import { connect } from "react-redux";
import { actions } from "../store/actions";
import { Page, Field, Button } from "../components";

class Refund extends Component {
  componentDidMount() {
    this.props.fetchBanks();

    if (this.props.match.params.id) {
      this.props.fetchRefund(this.props.match.params.id);
    } else {
      this.props.resetRefund();
    }
  }

  finalize = this.props.handleSubmit(values => {
    values = Object.assign(values, { userId: this.props.user.id });
    this.props.saveRefund(values);
  });

  mapBanks = () => {
    return this.props.banks.map(bank => {
      return { value: bank.id, name: bank.name };
    });
  };

  total = () => {
    let sum = 0;
    if (this.props.formValues && this.props.formValues.items) {
      this.props.formValues.items.forEach(item => {
        if (!isNaN(item.value)) {
          sum += parseFloat(item.value);
        }
      });
    }

    return sum;
  };

  renderItems = ({ fields }) => (
    <div>
      <div className="field">
        <Button
          text="Adicionar Gasto"
          onClick={() => {
            fields.push({});
          }}
        />
      </div>
      <table className="table is-narrow is-fullwidth">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Nota Fiscal</th>
            <th>Valor (R$)</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={index}>
              <td>
                <Field name={`${field}.desc`} />
              </td>
              <td>
                <Field name={`${field}.nf`} />
              </td>
              <td>
                <Field name={`${field}.value`} />
              </td>
              <td>
                <Button
                  className="fa fa-remove"
                  onClick={() => {
                    fields.remove(index);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  render() {
    return (
      <Page title="Solicitação de Reembolso">
        <div className="columns">
          <div className="column">
            <Field
              name="userName"
              label="Nome"
              stateless
              readOnly
              value={this.props.user.name}
            />
          </div>
          <div className="column">
            <Field
              name="userEmail"
              label="E-mail"
              stateless
              readOnly
              value={this.props.user.email}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-one-third">
            <Field name="status" label="Status" readOnly />
          </div>
          <div className="column">
            <Field
              name="totalValue"
              label="Valor Total (R$)"
              stateless
              readOnly
              value={this.total()}
              number
            />
          </div>
          <div className="column">
            <Field
              name="bankId"
              label="Banco"
              type="select"
              options={this.mapBanks()}
            />
          </div>
          <div className="column">
            <Field name="agency" label="Agencia" />
          </div>
          <div className="column">
            <Field name="account" label="Conta Corrente" />
          </div>
        </div>
        <FieldArray name="items" component={this.renderItems} />
        <div className="field is-grouped">
          <div className="control">
            <Button
              className="is-primary"
              text="Finalizar Solicitação"
              onClick={this.finalize}
            />
          </div>
          <div className="control">
            <Link to="/refunds" className="button">
              Cancelar Alterações
            </Link>
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
    initialValues: state.refund,
    formValues: state.form.refund ? state.form.refund.values : null,
    banks: state.banks
  };
}

Refund = connect(mapStateToProps, actions)(Refund);

export default Refund;
