import React, { Component } from "react";

export class navLinks extends Component {
  render() {
    return (
      <li>
        <a href={this.props.href}>{this.props.link}</a>
      </li>
    );
  }
}

export default navLinks;
