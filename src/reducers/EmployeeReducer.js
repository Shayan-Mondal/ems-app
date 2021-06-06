import {
  EMPLOYEE_CREATE,
  EMPLOYEE_DELETE,
  EMPLOYEE_GET_ALL,
  EMPLOYEE_GET_BY_ID,
  EMPLOYEE_UPDATE,
} from "./../actions/ActionType";

const initState = {
  list: [],
};

export function EmployeeReducer(state = initState, action) {
  switch (action.type) {
    case EMPLOYEE_CREATE:
      const newList = [action.payload, ...state.list];
      return { ...state, list: newList };

    case EMPLOYEE_DELETE:
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);

      return { ...state, list: [...oldList] };

    case EMPLOYEE_UPDATE:
      return state;

    case EMPLOYEE_GET_ALL:
      return { ...state, list: action.payload };

    case EMPLOYEE_GET_BY_ID:
      return state;

    default:
      return state;
  }
}
