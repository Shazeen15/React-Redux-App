import axios from "axios";
// https://www.amiiboapi.com/api/amiibo/

export const getAmiiboChar = () => {
  return (dispatch) => {
    axios
      .get("https://www.amiiboapi.com/api/amiibo/")
      .then((res) => {
        dispatch({ type: "FETCH_CHARACTERS", payload: res.data.amiibo });
      })
      .catch((error) => {
        console.log(error.response.data.code);
        dispatch({ type: "FETCH_FAIL", payload: error.response.data.code });
      });
  };
};
