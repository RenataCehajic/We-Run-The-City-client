import { FETCHED_RUNNINGCLUBS } from "./actions";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHED_RUNNINGCLUBS:
      return [...state, ...payload];

    default:
      return state;
  }
};
