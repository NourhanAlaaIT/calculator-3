import React, { Component } from "react";
import "./container.css";
import Buttons from "./Buttons";
import CalcScreen from "./Screen";
class Logic extends Component {
  //this component depends on add logic functions to calculator app
  state = {
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    operators: ["+", "-", "*", "/", "%", ".", "=", "%"],
    result: ""
  };
  //display on screen when buttons clicked
  addToScreen = val => {
    this.setState({ result: this.state.result + val });
  };
  //prevent add zeros to screen if it is empty
  addZeroToScreen = () => {
    if (this.state.result !== "") {
      this.setState({ result: this.state.result + 0 });
    }
  };
  //prevent add decimals more than one
  decimal = () => {
    if (this.state.result.indexOf(".") === -1) {
      this.setState({ result: this.state.result + "." });
    }
  };
  //clear screen
  clearScreen = () => {
    this.setState({ result: "" });
  };
  //delete one number by one number from screen
  delete = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };
  //calculation function
  calc = () => {
    this.setState({
      result: (eval(this.state.result) || "") + ""
    });
  };
  //do those functions on click
  onClick = val => {
    if (val === "=") {
      this.calc();
    } else if (val === "C") {
      this.clearScreen();
    } else if (val === "CE") {
      this.delete();
    } else if (val === ".") {
      this.decimal();
    } else if (val === "0") {
      this.addZeroToScreen();
    } else {
      this.setState({
        result: this.state.result + val
      });
    }
  };

  render() {
    return (
      <div className="calcWrapper">
        <CalcScreen result={this.state.result} />
        <Buttons
          numbers={this.state.numbers}
          operators={this.state.operators}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default Logic;
