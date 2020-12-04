import React, { Component } from "react";

class CompViewClass extends Component {
  // class 밑에 붙은 전역변수를 render 안에서 사용하려면 this. 키워드 필요
  viewStyleMember = {
    color: "yellowgreen",
  };
  render() {
    // render 함수 내에서만 사용하는 지역변수는 써먹을때 this를 붙일필요가 없다
    const viewStylePrivate = {
      color: "crimson",
    };
    const { inputText } = this.props;
    return (
      <div>
        {/* state={this.state} 로 보낸 변수를 사용하는 방법 */}
        <h3 style={this.viewStyleMember}>
          입력값 : {this.props.state.inputText}
        </h3>

        {/* inputText={this.state.inputText로 보낸 변수를 사용} */}
        <h3 style={viewStylePrivate}>입력값 : {this.props.inputText}</h3>

        {/* inputtext={this.state.inputText}로 보낸 변수를 
        전개하여 변수만 별도로 추출하여 사용하는 방법 */}
        <h3 style={this.viewStyleMember}>입력값 : {inputText}</h3>
      </div>
    );
  }
}

export default CompViewClass;
