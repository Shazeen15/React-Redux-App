const initialState = {
  amiiboChars: [],
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CHARACTERS":
      return {
        ...state,
        amiiboChars: action.payload,
        error: "",
      };
    case "FETCH_FAIL":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
