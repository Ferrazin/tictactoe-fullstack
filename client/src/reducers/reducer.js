import {
    SAVE_BOARD_SUCCESS,
    SAVE_BOARD_FAILED,
  } from "../actions/games";
  import { combineReducers } from 'redux'
  
  const board = (state = [], { type, payload }) => {
    switch (type) {
      case SAVE_BOARD_SUCCESS:
        return {...state};
      case SAVE_BOARD_FAILED:
        return;
      default:
        return state;
    }
  };
  
  export default combineReducers({
      board,
  })