import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IncrementCount } from "../actions/Action";

export const FaceBook = () => {
  const [list] = useState([1, 2, 3]);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const increment = () => dispatch(IncrementCount());
  return (
    <div>
      <h1 className="h11" p-3>
        FaceBook
      </h1>
      {list.map((item, index) => (
        <div key={index}>
          <img
            src={"https://picsum.photos/300" + index}
            style={{
              height: "10%",
              width: "10%",
              objectFit: "cover",
              padding: "5px",
              borderRadius: "rounded",
            }}
            alt=""
          />
          <span key={index}>This pic is interesting!</span>
          <span>{state.cr.counter}</span>
          <span key={index} onClick={increment}>
            &#128077;
          </span>
        </div>
      ))}
    </div>
  );
};
