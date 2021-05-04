import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from "./item";

import removeItem from "../actions/removeItem";

const Stack = () => {
  const listData = useSelector((state) => state.listItems);
  const dispatch = useDispatch();

  const onDelete = (data) => {
    console.log(data);
    dispatch(removeItem(data));
  };
  return (
    <div>
      {listData.map((ele, i) => (
        <Item index={i} key={i} value={ele} handleClick={onDelete} />
      ))}
    </div>
  );
};

export default Stack;
