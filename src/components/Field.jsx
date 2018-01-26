import React, { Component } from "react";
import { Field as ReduxFormField } from "redux-form";

class Field extends Component {
  component = ({ input }) => {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">{this.input(input)}</div>
      </div>
    );
  };

  input = input => {
    if (this.props.type === "select") {
      return (
        <div class="select is-fullwidth">
          <select {...input}>{this.options()}</select>
        </div>
      );
    } else {
      return <input className="input" type="text" {...input} />;
    }
  };

  options = () => {
    if (!this.props.options) return null;
    return this.props.options.map(option => {
      return <option value={option.value}>{option.name}</option>;
    });
  };

  render() {
    return <ReduxFormField name={this.props.name} component={this.component} />;
  }
}

export default Field;
