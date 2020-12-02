import React, { useState } from "react";
import Input from "./CompInput";
import Display from "./CompDisp";

function CompBody(props) {
  const [number, setNumber] = useState(3);
  return (
    <div>
      <Input setNumber={setNumber} />
      <Display number={number} />
    </div>
  );
}

export default CompBody;
