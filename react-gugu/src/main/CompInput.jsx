import React, { useState } from "react";

function CompInput({ setNumber }) {
  const [inputValue, setInputValue] = useState(3);

  const inputStyle = {
    fontsize: "20px",
    padding: "10px",
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
    setNumber(Number(e.target.value));
  };

  return (
    <div>
      <input
        onChange={onChange}
        style={inputStyle}
        placeholder="숫자를.. 입력! ><"
        value={inputValue}
      />
    </div>
  );
}

export default CompInput;
