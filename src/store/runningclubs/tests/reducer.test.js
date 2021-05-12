import reducer from "../reducer";
import { FETCHED_RUNNINGCLUBS } from "../actions";

describe("#runningclubsReducer", () => {
  describe("If given no state and a null action", () => {
    test("It should return the initialState", () => {});
    const action = {};
    expect(reducer(undefined, action)).toEqual([]);
  });

  describe("If given an action with type FETCHED_RUNNINGCLUBS and an array of objects as payload", () => {
    describe("If the current state is empty", () => {
      const action = {
        type: FETCHED_RUNNINGCLUBS,
        payload: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
          { id: 9 },
        ],
      };
      const state = [];

      test("It should return a new state with those objects in the array", () => {
        expect(reducer(state, action)).toHaveLength(9);
      });
      test("It should keep the order cof the payload array", () => {
        expect(reducer(state, action)[0].id).toEqual(1);
      });
    });

    describe("If the current state has 8 objects", () => {});
  });
});
