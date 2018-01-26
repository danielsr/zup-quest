import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.title}</p>
          </header>
          <section className="modal-card-body">{this.props.children}</section>
          <footer className="modal-card-foot">{this.props.buttons()}</footer>
        </div>
      </div>
    );
  }
}

export default Modal;
