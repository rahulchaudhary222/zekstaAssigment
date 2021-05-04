import React from "react";

const Item = ({ value, handleClick, index }) => {
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => handleClick(index)}>Delete</button>
    </div>
  );
};

export default Item;
