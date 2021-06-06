import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CounterReducer } from "../reducers/CounterReducer";
import { TweetReducer } from "../reducers/TweetReducer";
import { EmployeeReducer } from "./../reducers/EmployeeReducer";

const rootReducer = combineReducers({
  cr: CounterReducer,
  tweet: TweetReducer,
  employee: EmployeeReducer,
});

//export const store = createStore(rootReducer);
export const store = createStore(rootReducer, applyMiddleware(thunk)); //applyMiddleware(thunk) is needed for connection with backEnd
