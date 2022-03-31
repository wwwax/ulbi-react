import styles from "./PostForm.module.css";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { useState } from "react";

export default function PostForm({ addPost }) {
  const [title, setTitle] = useState("");

  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newPost = {
      title,
      body,
      id: Date.now(),
    };

    addPost(newPost);

    setTitle("");
    setBody("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <CustomInput
        type="text"
        placeholder="post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <CustomInput
        type="text"
        placeholder="post body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <CustomButton>Create Post</CustomButton>
    </form>
  );
}
