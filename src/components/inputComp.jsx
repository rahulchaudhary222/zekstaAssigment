import React from "react";
import { useDispatch } from "react-redux";
import addItem from "../actions/addItem";

const InputComp = () => {
  let inputData = "";
  const dispatch = useDispatch();

  const validate = () => {
    for (let i = 0; i < 10; i++) {
      if (inputData.includes(i.toString())) {
        alert("input contains a number");
        return;
      }
    }

    if (inputData.length < 8) {
      alert("input is smaller than 8");
    } else if (inputData.includes(" ")) {
      alert("input contains one or more spaces");
    } else {
      dispatch(addItem(inputData));
    }
  };

  return (
    <div>
      <input onChange={(e) => (inputData = e.target.value)}></input>
      <button onClick={() => validate()}>Submit</button>
    </div>
  );
};

export default InputComp;
