import { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";

function App() {
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

  return (
    <div>
      <Header />
      <div className="container">
        <Counter />
      </div>
    </div>
  );
}

export default App;
