import React, { Component } from "react";
import { Field as ReduxFormField } from "redux-form";

class Field extends Component {
  component = ({ input }) => {
    return <input className="input" type={this.props.type} {...input} />;
  };

  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <ReduxFormField name={this.props.name} component={this.component} />
        </div>
      </div>
    );
  }
}

export default Field;
