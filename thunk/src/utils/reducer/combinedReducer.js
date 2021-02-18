import { combineReducers } from "redux";

import { breweriesRecucer as breweries } from "./../reducer/breweriesReducer";
import { cityFormReducer as cityForm } from "./../reducer/cityFormReducer";

const combinedReducer = combineReducers({
  breweries,
  cityForm,
});
export default combinedReducer;
