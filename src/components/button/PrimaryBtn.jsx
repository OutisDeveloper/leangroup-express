import React, { Component } from "react";
import "./primaryBtn.css";
export class PrimaryBtn extends Component {
  render() {
    return <button className="primaryBtn">{this.props.btnText}</button>;
  }
}

export default PrimaryBtn;
