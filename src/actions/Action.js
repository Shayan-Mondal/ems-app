import {
  DEC,
  INC,
  POST_TWEET,
  DELETE_TWEET,
  EMPLOYEE_CREATE,
  EMPLOYEE_UPDATE,
  EMPLOYEE_DELETE,
  EMPLOYEE_GET_ALL,
  EMPLOYEE_GET_BY_ID,
} from "./ActionType";

export const IncrementCount = () => {
  return { type: INC };
};

export const DecrementCount = () => {
  return { type: DEC };
};

export const PostTweet = (payload) => {
  return { type: POST_TWEET, payload: payload };
};

export function DeleteTweet(payload) {
  return { type: DELETE_TWEET, payload: payload };
}

//Employee Operation

export function createEmployeeAction(payload) {
  return async (dispatch) => {
    const url = "http://localhost:8090/employee/";
    const requestBody = { ...payload };

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    dispatch({ type: EMPLOYEE_CREATE, payload: payload });
  };
}

export function updateEmployeeAction(payload) {
  return { type: EMPLOYEE_UPDATE, payload: payload };
}

export function deleteEmployeeAction(payload) {
  //return { type: EMPLOYEE_DELETE, payload: payload };

  return async (dispatch) => {
    const url = `http://localhost:8090/employee/${payload.id}`;
    await fetch(url, { method: "DELETE" });
    dispatch(getAllEmployeeAction());
  };
}

export function getAllEmployeeAction(payload) {
  //return { type: EMPLOYEE_GET_ALL, payload: payload };
  return async (dispatch) => {
    const url = "http://localhost:8090/employee/";

    const response = await fetch(url);
    const a = await response.json();

    dispatch({ type: EMPLOYEE_GET_ALL, payload: a });
  };
}

export function getByIdEmployeeAction() {
  return { type: EMPLOYEE_GET_BY_ID };
}
