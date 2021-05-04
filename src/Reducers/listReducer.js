let initialState = {
  listItems: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, listItems: [action.payload, ...state.listItems] };
    case "REM":
      let newList = [...state.listItems];
      newList.splice(action.payload, 1);
      return { ...state, listItems: newList };
    default:
      return state;
  }
};
export default listReducer;
