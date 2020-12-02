import React, { Component } from "react";

class CompInputClass extends Component {
  render() {
    const { setNumber } = this.props;

    this.state = { inputValue: 1, setInputValue: 1 };

    const onChange = (e) => {
      this.setState.setinputValue(e.target.value);
      this.props.setNumber(Number(e.target.value));
    };

    return (
      <div>
        <input
          onChange={onChange}
          placeholder="숫자입력"
          value={this.state.inputValue}
        />
      </div>
    );
  }
}

export default CompInputClass;
