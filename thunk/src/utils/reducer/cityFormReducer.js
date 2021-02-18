const initialValue = {
  city: "san diego",
  loadingForm: false,
  error: "",
};

export const cityFormReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "LOAD_FORM":
      return {
        ...state,
        loadingForm: true,
      };
    case "SET_CITY":
      return {
        ...state,
        loadingForm: false,
        city: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        loadingForm: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
