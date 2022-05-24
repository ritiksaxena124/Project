const reducer = (state = false, action) => {
  if (action.type === "login") {
    return (state = action.payload);
  } else if (action.type === "logout") {
    return (state = action.payload);
  }else{
    return state;
  }
};

export default reducer;
