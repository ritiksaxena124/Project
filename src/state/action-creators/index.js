const LoggedIn = () => {
  return (dispatch) => {
    dispatch({
      type: "login",
      payload: true,
    });
  };
};

const LoggedOut = () => {
  return (dispatch) => {
    dispatch({
      type: "logout",
      payload: false,
    });
  };
};

export { LoggedIn, LoggedOut };
