import React, { Component } from "react";

class CompDispClass extends Component {
  render() {
    const { number } = this.props;

    return (
      <div>
        <h3>
          {this.props.number}와 69의 합 : {this.props.number + 69}
        </h3>
        <h3>
          {this.props.number}의 제곱 : {this.props.number * this.props.number}
        </h3>
      </div>
    );
  }
}

export default CompDispClass;
