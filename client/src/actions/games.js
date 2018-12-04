import * as request from "superagent";
import { baseUrl } from "../constants";

export const SAVE_BOARD_SUCCESS = "SAVE_BOARD_SUCCESS";
export const SAVE_BOARD_FAILED = "SAVE_BOARD_FAILED";

const saveBoardSuccess = () => ({
  type: SAVE_BOARD_SUCCESS
});

const saveBoardFailed = () => ({
  type: SAVE_BOARD_FAILED
});

export const saveBoard = squares => dispatch =>
  request
    .post(`${baseUrl}/games`)
    .send(squares)
    .then(result => dispatch(saveBoardSuccess(result.body)))
    .catch(err => {
      if (err.status === 400) {
        dispatch(saveBoardFailed(err.response.body.message));
      } else {
        console.error(err);
      }
    });
