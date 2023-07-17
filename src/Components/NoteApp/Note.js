import React, { Component } from "react";

export default class Note extends Component {
  getIdElm(idelm) {
    let idElm = idelm;
    this.props.removeNote(idElm);
  }
  render() {
    return (
      <div
        className="card shadow-sm rounded"
        style={{ backgroundColor: this.props.bg }}
        onClick={() => this.getIdElm(this.props.id)}
      >
        <p className="card-text p-3">{this.props.title}</p>
      </div>
    );
  }
}
