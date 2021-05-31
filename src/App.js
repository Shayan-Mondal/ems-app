import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyDynamicForm />;
      <MyDynamicForm />
    </div>
  );
}

const MyDynamicForm = () => {
  const [list, setList] = useState([""]);

  const [newTweet, setNewTweet] = useState([""]);

  const readAndUpdateTweet = (e) => setNewTweet(e.target.value);

  const post = () => {
    setList([newTweet, ...list]);
    setNewTweet("");
  };
  return (
    <div>
      <h1 className="h">Tweeter</h1>

      <input
        type="text"
        className="form"
        value={newTweet}
        onChange={(e) => readAndUpdateTweet(e)}
        placeholder="What are you thinking..."
      />

      <input
        type="button"
        className="button"
        value="Post"
        onClick={() => post()}
      />

      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};
