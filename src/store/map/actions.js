import axios from "axios";

const API_URL = "//localhost:4000";

export const FETCHED_RUNNINGCLUBS_LOCATIONS = "FETCHED_RUNNINGCLUBS_MAP";

const fetchedRunningclubsLocations = (runningclubs) => ({
  type: FETCHED_RUNNINGCLUBS_LOCATIONS,
  payload: runningclubs,
});

export const fetchRunningclubsLocations = () => {
  return async (dispatch, getState) => {
    const locations = getState().map.locations.length;
    const response = await axios.get(`${API_URL}/map?offset=${locations}`);
    dispatch(fetchedRunningclubsLocations(response.data));
  };
};
