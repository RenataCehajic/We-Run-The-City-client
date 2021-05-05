import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import runningclubs from "./runningclubs/reducer";
import map from "./map/reducer";
import runningclubDetails from "./runningclubDetail/reducer";

export default combineReducers({
  appState,
  user,
  runningclubs,
  map,
  runningclubDetails,
});
