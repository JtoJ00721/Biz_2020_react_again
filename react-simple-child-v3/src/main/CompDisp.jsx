import React from "react";

function CompDisp({ number }) {
  return (
    <div>
      <h3>
        {number}와 69의 합 : {number + 69}
      </h3>
      <h3>
        {number}의 제곱 : {number * number}
      </h3>
    </div>
  );
}

export default CompDisp;
