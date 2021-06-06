import { Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { DecrementCount, IncrementCount } from "../actions/Action";

export const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const increment = () => dispatch(IncrementCount());
  const decrement = () => dispatch(DecrementCount());

  return (
    <div>
      <div>
        <Alert variant="danger">
          <h1>Welcome to Vehicle Rental Service!</h1>
        </Alert>
      </div>
      <div>The Count : {state.cr.counter}</div>
      <Button variant="outline-primary w-100 my-2" onClick={increment}>
        Counter
      </Button>
      <Button variant="outline-danger w-100" onClick={decrement}>
        Counter
      </Button>
    </div>
  );
};
