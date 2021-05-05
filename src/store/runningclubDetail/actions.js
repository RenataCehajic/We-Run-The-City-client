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

export const postingReview = (review) => {
  return {
    type: POSTED_REVIEW,
    payload: review,
  };
};

export const postReview = (content, id) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());
    const state = getState();

    const response = await axios.post(
      `${API_URL}/runningslubs/${id}/review`,
      {
        time: new Date(),
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("create new review", response);
    dispatch(postReview(response));
    dispatch(
      showMessageWithTimeout(
        "success",
        false,
        "You have been successful!",
        3000
      )
    );

    dispatch(appDoneLoading());
  };
};
