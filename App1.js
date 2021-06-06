import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyDynamicForm />
    </div>
  );
}

const MyDynamicForm = () => {
  const [list] = useState([1, 2, 3, 4]);

  return (
    <div>
      <h1 className="bg-dark text-light p-3 sticky-top">Cricket</h1>

      {list.map((item, index) => (
        <div>
          <div key={index} className="alert-secondary p-3 m-3 rounded"></div>
          <img
            src={"https://picsum.phoyos/300" + index}
            className="rounded"
            alt=""
          />
        </div>
      ))}
    </div>
  );
};
