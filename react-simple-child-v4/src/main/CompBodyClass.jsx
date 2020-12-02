import React, { Component } from "react";
import CompInput from "./CompInputClass";
import CompDisp from "./CompDispClass";

class CompBodyClass extends Component {
  state = { number: 1, setNumber: 1 };

  render() {
    return (
      <div>
        <CompInput setNumber={this.state.setNumber} />
        <CompDisp number={this.state.number} />
      </div>
    );
  }
}

export default CompBodyClass;
