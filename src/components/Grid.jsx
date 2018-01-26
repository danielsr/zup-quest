import React, { Component } from "react";
import { Link } from "react-router-dom";

class Grid extends Component {
  renderHead = () => {
    if (!this.props.fields) return;

    return this.props.fields.map(field => {
      return <th key={field.name}>{field.label}</th>;
    });
  };

  renderFields = item => {
    if (!this.props.fields) return;

    return this.props.fields.map(field => {
      var key = field.name + "_" + item[this.props.keyField];
      var value = item[field.name];
      return <td key={key}>{value}</td>;
    });
  };

  renderBody = () => {
    if (!this.props.items) return;

    return this.props.items.map(item => {
      return (
        <tr key={item[this.props.keyField]}>
          {this.renderFields(item)}
          <td className="has-text-centered">
            <Link
              to={this.props.editRoute + item[this.props.keyField]}
              className="fa fa-edit"
            />
          </td>
          <td className="has-text-centered">
            <Link
              to={this.props.deleteRoute + item[this.props.keyField]}
              className="fa fa-remove"
            />
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <table className="table is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            {this.renderHead()}
            <th className="has-text-centered">Editar</th>
            <th className="has-text-centered">Excluir</th>
          </tr>
        </thead>
        <tbody>{this.renderBody()}</tbody>
      </table>
    );
  }
}

export default Grid;
