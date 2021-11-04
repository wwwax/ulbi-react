import { useState } from "react";
import List from "./components/List";
import CustomButton from "./components/ui/button/CustomButton";
import CustomInput from "./components/ui/input/CustomInput";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      description: "JavaScript - programming language",
    },
    {
      id: 2,
      title: "React",
      description: "React - JavaScript library",
    },
    {
      id: 3,
      title: "SASS",
      description: "SASS - CSS preprocessor",
    },
  ]);
  const [colors, setColors] = useState([
    {
      id: 1,
      title: "Red",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 2,
      title: "Green",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 3,
      title: "Blue",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
  ]);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const onInputChange = (e) => {
    return setInputValue(e.target.value);
  };

  const addNewPost = (e) => {
    e.preventDefault();
    console.log("add new post");
  };

  return (
    <div className="app">
      <div className="header">
        <h2>Awesome React 2021</h2>
        <hr />
      </div>

      <div className="counter">
        <h2>Counter: {counter}</h2>
        <div>
          <button onClick={decrement}>dec</button>
          <button onClick={reset}>res</button>
          <button onClick={increment}>inc</button>
        </div>
        <hr />
      </div>

      <div className="input-section">
        <h2>Input Value: {inputValue}</h2>
        <input type="text" value={inputValue} onChange={onInputChange} />
        <hr />
      </div>

      <div>
        <List items={posts} title="Posts" />
        <List items={colors} title="Colors" />
        <hr />
      </div>

      <div>
        <h2>Form</h2>
        <form>
          <CustomInput type="text" placeholder="post title" />
          <CustomInput type="text" placeholder="post description" />
          <CustomButton onClick={addNewPost}>Add Post</CustomButton>
        </form>
        <hr />
      </div>
    </div>
  );
};

export default App;
