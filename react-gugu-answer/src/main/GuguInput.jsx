import React, { useState } from "react";

function GuguInput({ setNumberFunc }) {
  const style = {
    fontSize: "20px",
    padding: "5px",
  };
  const [number, setNumber] = useState(1);
  const onChange = (e) => {
    setNumber(e.target.value);
    setNumberFunc(e.target.value);
  };
  return (
    <div>
      <input
        style={style}
        placeholder="숫자를 입력 ><"
        value={number}
        onChange={onChange}
      />
    </div>
  );
}

export default GuguInput;
