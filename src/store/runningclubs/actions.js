import axios from "axios";

const API_URL = "//localhost:4000";

const pagination_limit = 25;
export const FETCHED_RUNNINGCLUBS = "FETCHED_RUNNINGCLUBS";

const fetchedRunningclubs = (runningclubs) => ({
  type: FETCHED_RUNNINGCLUBS,
  payload: runningclubs,
});

export const fetchRunningclubs = () => {
  return async (dispatch, getState) => {
    const runningclubs = getState().runningclubs.length;

    const response = await axios.get(
      `${API_URL}/runningclubs?limit=${pagination_limit}&&offset=${runningclubs}`
    );

    dispatch(fetchedRunningclubs(response.data));
  };
};
