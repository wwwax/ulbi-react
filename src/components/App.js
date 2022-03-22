import { useState } from "react";
import PostList from "./PostList";
import styles from "./App.module.css";
import CustomButton from "./ui/CustomButton";
import CustomInput from "./ui/CustomInput";

export default function App() {
  const [posts, setPosts] = useState([
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

  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts((posts) => [...posts, { ...post, id: Date.now() }]);

    setPost({
      title: "",
      body: "",
    });
  };

  return (
    <div className={styles.app}>
      <form>
        <CustomInput
          type="text"
          placeholder="Post name"
          value={post.title}
          onChange={(e) =>
            setPost((post) => ({ ...post, title: e.target.value }))
          }
        />
        <CustomInput
          type="text"
          placeholder="Post description"
          value={post.body}
          onChange={(e) =>
            setPost((post) => ({ ...post, body: e.target.value }))
          }
        />
        <CustomButton onClick={addNewPost}>Create</CustomButton>
      </form>

      <PostList posts={posts} title={"Posts"} />
    </div>
  );
}
