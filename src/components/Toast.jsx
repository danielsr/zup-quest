import React, { Component } from "react";
import { connect } from "react-redux";

class Toast extends Component {
  render() {
    if (!this.props.msg) return null;

    return (
      <div
        style={{
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: 10,
          borderRadius: 5,
          position: "fixed",
          top: "10%",
          left: "50%",
          minWidth: 300,
          textAlign: "center",
          marginLeft: -150,
          zIndex: 99
        }}
      >
        {this.props.msg}
      </div>
    );
  }
}

function mapStateToProps({ msg }) {
  return { msg };
}

Toast = connect(mapStateToProps)(Toast);

export default Toast;
