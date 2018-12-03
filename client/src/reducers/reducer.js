import {SAVE_BOARD_SUCCESS, SAVE_BOARD_FAILED} from '../actions/games'

const reducer = (state = [], {type, payload}) => {
    switch (type) {
        case SAVE_BOARD_SUCCESS:
            return payload;
        case SAVE_BOARD_FAILED:
            return; 
    default:
      return state
    }
  }
  
  export default reducer