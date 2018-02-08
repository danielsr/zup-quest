import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        type={this.props.type}
        className={"button " + this.props.className || ""}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

Button.defaultProps = {
  type: "button"
}

export default Button;
