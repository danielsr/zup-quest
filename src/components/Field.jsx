import React, { Component } from "react";
import { Field as ReduxFormField } from "redux-form";

class Field extends Component {
  component = ({ input }) => {
    return (
      <div className="field">
        {this.props.label ? (
          <label className="label">{this.props.label}</label>
        ) : (
          ""
        )}
        <div className="control">{this.input(input)}</div>
      </div>
    );
  };

  input = input => {
    if (this.props.type === "select") {
      return (
        <div className="select is-fullwidth">
          <select {...input} readOnly={this.props.readOnly}>
            <option value="">SELECIONE</option>
            {this.options()}
          </select>
        </div>
      );
    } else {
      return (
        <input
          className="input"
          type={this.props.type}
          {...input}
          readOnly={this.props.readOnly}
          value={
            this.props.number
              ? input.value.toLocaleString(navigator.language, {
                  minimumFractionDigits: 2
                })
              : input.value
          }
        />
      );
    }
  };

  options = () => {
    if (!this.props.options) return null;
    return this.props.options.map(option => {
      return (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      );
    });
  };

  render() {
    if (this.props.stateless) {
      const field = {
        input: {
          name: this.props.name,
          value: this.props.value
        }
      };
      return this.component(field);
    } else {
      return (
        <ReduxFormField name={this.props.name} component={this.component} />
      );
    }
  }
}

export default Field;
