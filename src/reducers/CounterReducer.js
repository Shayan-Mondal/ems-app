import { DEC, INC } from "../actions/ActionType";

const initialState = {
  counter: 0,
};
export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEC:
      return { ...state, counter: state.counter - 1 };
    case INC:
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};
