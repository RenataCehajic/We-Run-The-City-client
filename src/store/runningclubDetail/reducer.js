import { FETCHED_RUNNINGCLUB_DETAILS } from "./actions";
import { UPDATED_RUNNINGCLUB_LIKES } from "./actions";
import { POSTED_REVIEW } from "./actions";

const initialState = {
  locations: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHED_RUNNINGCLUB_DETAILS:
      return payload;

    case UPDATED_RUNNINGCLUB_LIKES:
      return {
        ...state,
        ...payload,
      };

    case POSTED_REVIEW:
      return {
        ...state,
        locations: [...state.bids, [...payload]],
      };

    default:
      return state;
  }
};
