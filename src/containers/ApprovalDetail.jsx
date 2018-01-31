import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../store/actions";
import { Modal, Field, Button } from "../components";

class ApprovalDetail extends Component {
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
    return (
      <Modal title="Solicitação de Reembolso" buttons={this.buttons}>
        ...
      </Modal>
    );
  }
}

ApprovalDetail = connect(null, actions)(ApprovalDetail);

export default ApprovalDetail;
