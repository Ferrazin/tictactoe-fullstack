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

export const saveGame = (winner, squares) => dispatch =>
  request
    .post(`${baseUrl}/games`)
    .send({winner, squares})
    .then(_ => dispatch(saveBoardSuccess()))
    .catch(err => {
      if (err.status === 400) {
        dispatch(saveBoardFailed(err.response.body.message));
      } else {
        console.error(err);
      }
    });

