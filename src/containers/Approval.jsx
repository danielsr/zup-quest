import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Page } from "../components";
import { actions } from "../store/actions";
import { Refunds as RefundsProvider } from "../providers/api";
import { formatDate } from "../util/date";

class Approval extends Component {
  componentDidMount() {
    this.props.fetchUserRefunds();
  }

  renderRefunds = () => {
    return this.props.refunds.map(refund => {
      return (
        <tr key={refund.id}>
          <td>{refund.id}</td>
          <td>{refund.user.name}</td>
          <td>{formatDate(refund.data)}</td>
          <td>{refund.status}</td>
          <td className="has-text-right">{RefundsProvider.getTotal(refund)}</td>

          <td className="has-text-centered">
            <Link to={"/approval/" + refund.id} className="icon">
              <i className="fa fa-check-square" />
            </Link>{" "}
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <Page title="Aprovação de Solicitações">
        <table className="table is-narrow is-fullwidth">
          <thead>
            <tr>
              <th>Número</th>
              <th>Funcionário</th>
              <th>Data da Solicitação</th>
              <th>Status</th>
              <th className="has-text-right">Valor (R$)</th>
              <th className="has-text-centered">Ver / Aprovar</th>
            </tr>
          </thead>
          <tbody>{this.renderRefunds()}</tbody>
        </table>
      </Page>
    );
  }
}

function mapStateToProps({ refunds }) {
  return {
    refunds
  };
}

Approval = connect(mapStateToProps, actions)(Approval);

export default Approval;
