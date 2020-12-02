import React from "react";

function CompDisp({ number }) {
  return (
    <div>
      <h3>
        {number} X 1 = {number}
      </h3>
      <h3>
        {number} X 2 = {number * 2}
      </h3>
      <h3>
        {number} X 3 = {number * 3}
      </h3>
      <h3>
        {number} X 4 = {number * 4}
      </h3>
      <h3>
        {number} X 5 = {number * 5}
      </h3>
      <h3>
        {number} X 6 = {number * 6}
      </h3>
      <h3>
        {number} X 7 = {number * 7}
      </h3>
      <h3>
        {number} X 8 = {number * 8}
      </h3>
      <h3>
        {number} X 9 = {number * 9}
      </h3>
    </div>
  );
}

export default CompDisp;
