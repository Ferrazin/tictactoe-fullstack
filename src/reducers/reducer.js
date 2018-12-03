import {SAVE_BOARD_SUCCESS, SAVE_BOARD_FAILED} from '../actions/games'

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case SAVE_BOARD_SUCCESS:
            return;
        case SAVE_BOARD_FAILED:
            return; 
    default:
      return state
    }
  }
  
  export default reducer