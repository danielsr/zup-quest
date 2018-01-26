import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm, arrayPush } from "redux-form";
import { Modal, Field, Button } from "../components";
import { connect } from "react-redux";

class RefundItem extends Component {
  buttons = () => {
    return (
      <div>
        <Button className="is-primary" text="Salvar" onClick={this.addItem} />
        <Link to="/refund" className="button">
          Cancelar
        </Link>
      </div>
    );
  };

  addItem = this.props.handleSubmit(values => {
    this.props.addItem(values);
    this.props.history.push("/refund");
  });

  render() {
    return (
      <Modal title="Novo Gasto" buttons={this.buttons}>
        <Field name="desc" label="Descrição" />
        <Field name="nf" label="Nota Fiscal" />
        <Field name="value" label="Valor (R$)" />
      </Modal>
    );
  }
}

RefundItem = reduxForm({
  form: "refundItem"
})(RefundItem);

function mapDispatchToProps(dispatch) {
  return {
    addItem: values => {
      dispatch(arrayPush("refund", "items", values));
    }
  };
}

RefundItem = connect(null, mapDispatchToProps)(RefundItem);

export default RefundItem;
