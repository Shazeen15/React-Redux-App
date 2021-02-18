import axios from "axios";
export const LOADING = "LOADING";
export const SET_DATA = "SET_DATA";
export const SET_ERROR = "SET_ERROR";

export const setBreweries = (city) => {
  return (dispatch) => {
    dispatch({ type: LOADING });
    axios
      .get(`https://api.openbrewerydb.org/breweries?by_city=${city}&sort=-name`)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: SET_DATA, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SET_ERROR, payload: err.message });
      });
  };
};
