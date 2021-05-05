import axios from "axios";
import { showMessageWithTimeout, appDoneLoading } from "../appState/actions";
import { selectUser } from "../user/selectors";

const API_URL = "//localhost:4000";

export const FETCHED_RUNNINGCLUB_DETAILS = "FETCHED_RUNNINGCLUB_DETAILS";
export const UPDATED_RUNNINGCLUB_LIKES = "UPDATED_RUNNINGCLUB_LIKES";
export const POSTED_REVIEW = "POSTED_REVIEW";

export const fetchedRunningclubDetails = (runningclubDetails) => ({
  type: FETCHED_RUNNINGCLUB_DETAILS,
  payload: runningclubDetails,
});

export const fetchRunningclubDetails = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${API_URL}/runningclubs/${id}`);
    dispatch(fetchedRunningclubDetails(response.data));
  };
};

export const incrementingLikes = (rate) => ({
  type: UPDATED_RUNNINGCLUB_LIKES,
  payload: rate,
});

export const incrementLikes = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.patch(`${API_URL}/runningclubs/${id}`);
    dispatch(incrementingLikes(response.data));
  };
};
