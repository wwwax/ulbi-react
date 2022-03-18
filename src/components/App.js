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

  const [postTitle, setPostTitle] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();

    console.log("postTitle :>> ", postTitle);
  };

  return (
    <div className={styles.app}>
      <form>
        <CustomInput
          type="text"
          placeholder="Post name"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <CustomInput type="text" placeholder="Post description" />
        <CustomButton onClick={addNewPost}>Create</CustomButton>
      </form>

      <PostList posts={posts} title={"Posts"} />
    </div>
  );
}
