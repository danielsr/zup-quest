import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Page } from "../components";
import { actions } from "../store/actions";
import { Refunds as RefundsProvider } from "../providers/api";
import { formatDate } from "../util/date";

class Refunds extends Component {
  componentDidMount() {
    this.props.fetchUserRefunds();
  }

  renderRefunds = () => {
    return this.props.refunds.map(refund => {
      return (
        <tr key={refund.id}>
          <td>{refund.id}</td>
          <td>{formatDate(refund.data)}</td>
          <td>{refund.status}</td>
          <td className="has-text-right">{RefundsProvider.getTotal(refund)}</td>

          <td className="has-text-centered">
            <Link to={"/refund/" + refund.id} className="icon">
              <i class="fa fa-edit" />
            </Link>{" "}
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <Page title="Solicitações de Reembolso">
        <div className="field">
          <Link to="/refund" className="button is-primary">
            Nova Solicitação
          </Link>
        </div>
        <table className="table is-narrow is-fullwidth">
          <thead>
            <tr>
              <th>Número</th>
              <th>Data da Solicitação</th>
              <th>Status</th>
              <th className="has-text-right">Valor (R$)</th>
              <th className="has-text-centered">Editar</th>
            </tr>
          </thead>
          <tbody>{this.renderRefunds()}</tbody>
        </table>
      </Page>
    );
  }
}

function mapStateToProps({ user, refunds }) {
  return {
    user,
    refunds
  };
}

Refunds = connect(mapStateToProps, actions)(Refunds);

export default Refunds;
