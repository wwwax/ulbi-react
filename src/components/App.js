import { useState } from "react";
import PostList from "./PostList";
import styles from "./App.module.css";

export default function App() {
  const [frontend, setFrontend] = useState([
    {
      id: 1,
      title: "HTML",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "CSS",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, perspiciatis quia nihil animi illum cum neque nesciunt maiores ducimus nam!",
    },
    {
      id: 3,
      title: "JavaScript",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, perspiciatis!",
    },
  ]);

  const [backend, setBackend] = useState([
    {
      id: 1,
      title: "NodeJS",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "Python",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, perspiciatis quia nihil animi illum cum neque nesciunt maiores ducimus nam!",
    },
  ]);

  return (
    <div className={styles.app}>
      <PostList posts={frontend} title={"Frontend"} />
      <PostList posts={backend} title={"Backend"} />
    </div>
  );
}
