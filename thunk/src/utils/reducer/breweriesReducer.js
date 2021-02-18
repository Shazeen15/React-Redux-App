import { LOADING, SET_DATA, SET_ERROR } from "./../actions/breweriesAction";
const initialValue = {
  breweries: [],
  fetching: false,
  error: "",
};

export const breweriesRecucer = (state = initialValue, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        fetching: true,
      };
    case SET_DATA:
      return {
        ...state,
        breweries: action.payload,
        fetching: false,
      };
    case SET_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
