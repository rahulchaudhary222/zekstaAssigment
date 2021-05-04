const addItem = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};
export default addItem;
