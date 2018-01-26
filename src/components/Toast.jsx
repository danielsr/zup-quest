import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { actions } from "../store/actions";

const StyledToast = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  position: fixed;
  top: 10%;
  left: 50%;
  min-width: 300px;
  text-align: center;
  margin-left: -150px;
  z-index: 99;
`;

class Toast extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.msg) {
      setTimeout(() => {
        this.props.setMsg(null);
      }, 3000);
    }
  }

  render() {
    if (!this.props.msg) return null;
    return <StyledToast>{this.props.msg}</StyledToast>;
  }
}

function mapStateToProps({ msg }) {
  return { msg };
}

Toast = connect(mapStateToProps, actions)(Toast);

export default Toast;
