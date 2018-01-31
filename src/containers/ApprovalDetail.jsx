import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../store/actions";
import { Modal, Button } from "../components";

class ApprovalDetail extends Component {
  componentDidMount() {
    this.props.fetchRefund(this.props.match.params.id);
  }

  buttons = () => {
    return (
      <div>
        <Button className="is-info" text="Aprovar" />
        <Button className="is-danger" text="Reprovar" />
        <Link className="button" to="/approval">
          Fechar
        </Link>
      </div>
    );
  };

  render() {
    const refund = this.props.refund;

    if (!refund || !refund.items) return null;

    return (
      <Modal title="Solicitação de Reembolso" buttons={this.buttons}>
        <p>
          <b>Funcionário:</b> {refund.user.name} ({refund.user.email})
        </p>
        <p>
          <b>Conta Bancária:</b> Ag: {refund.agency} Cc: {refund.account}
        </p>
        <br />
        <table className="table is-narrow is-fullwidth">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Nota Fiscal</th>
              <th>Valor (R$)</th>
            </tr>
          </thead>
          <tbody>
            {refund.items.map((item, index) => (
              <tr key={index}>
                <td>{item.desc}</td>
                <td>{item.nf}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>
    );
  }
}

function mapStateToProps({ refund }) {
  return {
    refund
  };
}

ApprovalDetail = connect(mapStateToProps, actions)(ApprovalDetail);

export default ApprovalDetail;
