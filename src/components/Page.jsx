import React, { Component } from "react";

class Page extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">{this.props.title}</h1>
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Page;
