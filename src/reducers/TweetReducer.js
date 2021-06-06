import { DELETE_TWEET, POST_TWEET } from "./../actions/ActionType";
const initState = {
  list: [],
};

export const TweetReducer = (state = initState, action) => {
  switch (action.type) {
    case POST_TWEET:
      const newList = [action.playload, ...state.list];
      return { ...state, list: newList };

    case DELETE_TWEET:
      // const oldList = state.list;
      // oldList.splice(action.payload, 1);
      // console.log("OL", oldList);
      const a = state.list.splice(action.playload, 1);

      return { ...state, list: [...a] };
    default:
      return state;
  }
};
