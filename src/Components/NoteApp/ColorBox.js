import React, { Component } from "react";

export default class ColorBox extends Component {
  getBgElem(bgColor) {
    this.props.changeBgInput(bgColor);
  }

  render() {
    return (
      <div
        className="color-box"
        style={{ backgroundColor: this.props.bgColor }}
        onClick={() => this.getBgElem(this.props.bgColor)}
      ></div>
    );
  }
}
