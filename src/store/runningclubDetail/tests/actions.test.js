import { fetchRunningclubDetails } from "../actions";
import axios from "axios";

jest.mock("axios");

describe("RunningclubDetails Actions", () => {
  describe("#fetchRunningclubDetails", () => {
    const response = { data: { runningclub: { id: 1 } } };
    axios.get.mockImplementationOnce(() => Promise.resolve(response));
    describe("when called and given an id", () => {
      test("it calls dispatch", async () => {
        const dispatch = jest.fn(); // Create an empty mock function
        await fetchRunningclubDetails(1)(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(1);
      });
    });
  });
});
