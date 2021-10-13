import { TIME_SELECTED } from "../constants/timer";

const initialState = {};

const timerReducer = (state = initialState, action) => {
  switch(action.type) {
    case TIME_SELECTED:
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
  
}

export default timerReducer
