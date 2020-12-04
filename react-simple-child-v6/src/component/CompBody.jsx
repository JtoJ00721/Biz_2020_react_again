import React, { useState } from "react";

/**
 * function type의 컴포넌트
 * func type의 컴포넌트는 마닐라 JS의 표준 함수로 생성을 한다.
 */
// 전형적인 표준함수
// function CompBody(props) {};

// 화살표 함수와 표준 함수의 중간정도 세대
// const CompBody = function (props) {};

// 이번에는 화살표 함수를 사용하여 선언
const CompBody = (props) => {
  // func type에서 state 변수를 선언할때는
  // 변수, setter가 쌍을 이루는 배열 방식으로 선언을 하고
  // useStae(초기값) 함수로 생성을 한다.
  const [inputText, setInputText] = useState("초기값");
  const inputStyle = { fontSize: "20px", padding: "5px" };
  const viewStyle = { color: "yellow" };

  const onChange = (e) => {
    // setInputText setter를 사용하여 inputText에
    // 키보드로 입력한 문자열(e.target.value)을 setting하라
    // inputText = e.target.value 라고 하지마라 두번 하지마라 직접 바꾸면 터진다
    setInputText(e.target.value);
  };

  return (
    <div>
      <input onChange={onChange} style={inputStyle} />
      {/* 
        func type(함수 방식)에서는 state 변수를 화면에 보일때
        {변수명} 형식으로 작성한다
        signal-to-noise-ratio : 신호대 잡음비
        개발자 입장에서 많은 코드는 그만큼 잡음(오류)를 내기 쉽다
        가급적 짧고 간결한 코드를 사용하는 것이 유리하다
      */}
      <h3 style={viewStyle}>입력값 : {inputText}</h3>
    </div>
  );
};

export default CompBody;
