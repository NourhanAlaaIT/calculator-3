import React, { Component } from "react";
import "./buttons.css";
class Buttons extends Component {
  //this component depends on mapping on parent's state  to display numbers and operators
  render() {
    return (
      <div className="btnsContainer">
        <div className="row">
          <button
            name="C"
            className="num"
            onClick={e => this.props.onClick(e.target.name)}
          >
            C
          </button>
          <button
            name="CE"
            className="num"
            onClick={e => this.props.onClick(e.target.name)}
          >
            CE
          </button>
        </div>
        <div className="row">
          {this.props.numbers.map(num => {
            if (num >= 7) {
              return (
                <button
                  className="num"
                  name={num}
                  key={num}
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  {num}
                </button>
              );
            }
          })}
          {this.props.operators.map(operator => {
            if (operator === "/") {
              return (
                <button
                  className="operator"
                  name={operator}
                  key={operator}
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  {operator}
                </button>
              );
            }
          })}
        </div>
        <div className="row">
          {this.props.numbers.map(num => {
            if (num >= 4 && num <= 6) {
              return (
                <button
                  className="num"
                  name={num}
                  key={num}
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  {num}
                </button>
              );
            }
          })}
          {this.props.operators.map(operator => {
            if (operator === "*") {
              return (
                <button
                  className="operator"
                  name={operator}
                  key={operator}
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  {operator}
                </button>
              );
            }
          })}
        </div>
        <div className="row">
          {this.props.numbers.map(num => {
            if (num >= 1 && num <= 3) {
              return (
                <button
                  className="num"
                  name={num}
                  key={num}
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  {num}
                </button>
              );
            }
          })}
          {this.props.operators.map(operator => {
            if (operator === "+") {
              return (
                <button
                  className="operator"
                  name={operator}
                  key={operator}
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  {operator}
                </button>
              );
            }
          })}
        </div>
        <div className="row">
          {this.props.operators.map(operator => {
            if (operator === ".") {
              return (
                <button
                  className="num"
                  name={operator}
                  key={operator}
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  {operator}
                </button>
              );
            }
          })}
          <button
            className="num"
            name="0"
            onClick={e => this.props.onClick(e.target.name)}
          >
            {this.props.numbers[0]}
          </button>
          {this.props.operators.map(operator => {
            if (operator === "-") {
              return (
                <button
                  className="num"
                  name={operator}
                  key={operator}
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  {operator}
                </button>
              );
            }
          })}
          {this.props.operators.map(operator => {
            if (operator === "=") {
              return (
                <button
                  className="operator"
                  name={operator}
                  key={operator}
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  {operator}
                </button>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Buttons;
