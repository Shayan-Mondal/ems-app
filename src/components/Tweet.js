import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTweet, PostTweet } from "../actions/Action";

export const Tweet = () => {
  //useState is private in nature and can't be used by other components.
  //const [list, setList] = useState([]);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState("");

  const updateTextInput = (e) => setTextInput(e.target.value);

  const posTweet = () => {
    //setList([textInput,...list]);
    dispatch(PostTweet(textInput));
    setTextInput("");
  };

  const deleteTweet = (item, index) => {
    // list.splice(index, 1);
    // setList([...list]);

    dispatch(DeleteTweet(index));
  };

  console.log(state.tweet.list);

  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);

  return (
    <div>
      <h1 className="h sticky-top">Mini Twitter</h1>

      <div className="">
        <input
          type="text"
          value={textInput}
          onChange={(e) => updateTextInput(e)}
          className="form"
          placeholder="what are you thinking!..."
        />
        <input
          type="button"
          className="button"
          onClick={() => posTweet()}
          value="Tweet"
        />
      </div>
      <div>
        <h2>Tweets..</h2>
        {state.tweet.list.map((item, index) => (
          <div
            key={index}
            className="alert alert-secondary d-flex justify-content-between align-items-center"
          >
            {item}

            <button onClick={() => increment()}>&#128077;</button>
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteTweet(item, index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
