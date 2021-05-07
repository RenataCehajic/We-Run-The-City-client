import { FETCHED_RUNNINGCLUB_DETAILS } from "./actions";
import { UPDATED_RUNNINGCLUB_LIKES } from "./actions";
import { POSTED_REVIEW } from "./actions";

const initialState = {
  location: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHED_RUNNINGCLUB_DETAILS:
      return {
        ...state,
        ...payload,
      };

    case UPDATED_RUNNINGCLUB_LIKES:
      return {
        ...state,
        ...payload,
      };

    case POSTED_REVIEW:
      console.log("payload", payload);
      console.log(state.location);
      console.log("right location", state);
      return {
        ...state,
        location: {
          ...state.location,

          reviews: [...state.location.reviews, payload],
        },
      };

    default:
      return state;
  }
};
