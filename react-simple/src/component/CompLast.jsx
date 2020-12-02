import React, { useState } from "react";

// function CompLast(props) : ES6이전의 함수 선언방식
// const CompLast = function(props) :
// const CompLast = (props) => : 최신의 화살표 함수 방식

// 컴포넌트 선언
// 컴포넌트의 이름(CompLast)는 첫글자를 대문자로 작성한다
// react나 3rd Party Component들의 이름과 충돌을 예방하고
// 사용자(개발자)가 임의로 작성한 컴포넌트인 것을 알림
const CompLast = (props) => {
  // 컴포넌트가 할일들

  // 1. state 변수를 선언하기
  // state변수(상태 변환 감지 변수)
  // react엔진이 변수의 값 변화를 감시하고 있다가
  // 값이 변화가 되면 변화된 값을 화면에 render(보여주기) 하는 용도의 변수
  // react.useState() method 를 이용하여 선언
  // useState(0) : state 변수의 초기값을 0으로 세팅하여 생성

  // useState(0) : 초기값을 0으로 하는 숫자형 state 변수 선언
  // useState("") : 초기값을 ""으로 하는 문자열형 state 변수 선언
  // useState({ id:0, name:"농농이" }) : 초기값을 id와 name 속성을 갖는
  // JSON 객체로 하는 변수선언
  // useState( [] ) : 초기값을 미어있는(내용이 없는) 배열형 변수로 선언
  const [count, setcount] = useState(0);

  // count state변수값을 1씩 증가시키는 코드
  // state변수는 절대 직접 값을 변경해서는 안된다
  // count++ 형식으로 절대 작성 금지
  const increment = () => {
    // count 변수에 담긴 값에 + 1을 수행하고 count state 변수를 교체하라
    setcount(count + 1);
  };

  const decrement = () => {
    setcount(count - 1);
  };

  // 함수 방식에서는
  // state 변수를 render code에서 사용할때
  // {변수명} 방식으로 사용한다.

  // 그런데 class 방식의 컴포넌트에서는
  // {this.state.변수명} 형식으로 사용을 해야 한다.
  // 또는 const {변수명} = this.state로 비규격화하여 변수를 별도로 선언하고
  // {변수명} 형식으로 사용해야 한다.
  return (
    <div>
      <h3>카운트 : {count}</h3>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </div>
  );
};

// 생성된 컴포넌트를 다른 컴포넌트에서 import하여 사용할수 있도록 선언
export default CompLast;
