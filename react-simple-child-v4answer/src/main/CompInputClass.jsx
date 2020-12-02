import React, { Component } from "react";

class CompInputClass extends Component {
  state = { inputValue: 0 };
  onChange = (e) => {
    this.setState({ inputValue: e.target.value });
    this.props.setState(e.target.value);
  };
  render() {
    const style = {
      fontSize: "20xp",
      padding: "5px",
    };
    return (
      <div>
        <input
          onChange={this.onChange}
          style={style}
          placeholder="숫자입력"
          value={this.state.inputValue}
        />
      </div>
    );
  }
}

export default CompInputClass;
