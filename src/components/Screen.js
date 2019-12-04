import React, { Component } from "react";
import "./screen.css";
class CalcScreen extends Component {
  render() {
    return (
      <div className="screenContainer">
        <div className="row">{this.props.result}</div>
      </div>
    );
  }
}

export default CalcScreen;
