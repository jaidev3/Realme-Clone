import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
`;

export default function Pagination({ perPage, OnPaginationChange, total }) {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = perPage * counter;
    OnPaginationChange(value - perPage, value);
  }, [counter]);

  const BtnClick = (type) => {
    if (type === "pre") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / perPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
    if (type === 1) {
      setCounter(1);
    }
    if (type === 2) {
      setCounter(2);
    }
    if (type === 3) {
      setCounter(3);
    }
  };

  return (
    <div>
      <Div>
        <button onClick={() => BtnClick("pre")}>
          <i class="bi bi-chevron-left"></i>
        </button>
        <button onClick={() => BtnClick(1)}>1</button>
        <button onClick={() => BtnClick(2)}>2</button>
        <button onClick={() => BtnClick(3)}>3</button>
        <button onClick={() => BtnClick("next")}>
          <i class="bi bi-chevron-right"></i>
        </button>
      </Div>
    </div>
  );
}
