import { useState } from "react";
import CustomInput from "./ui/CustomInput";
import CustomButton from "./ui/CustomButton";

export default function PostForm({ addNewPost }) {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewPost({ ...post, id: Date.now() });
    setPost({
      title: "",
      body: "",
    });
  };

  return (
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
        onChange={(e) => setPost((post) => ({ ...post, body: e.target.value }))}
      />
      <CustomButton onClick={handleSubmit}>Create</CustomButton>
    </form>
  );
}
