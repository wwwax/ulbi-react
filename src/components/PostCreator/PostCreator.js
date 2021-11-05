import { useState } from "react";
import CustomInput from "../UI/CustomInput";
import CustomButton from "../UI/CustomButton";
import style from "./PostCreator.module.css";

function PostCreator({ addNewPost }) {
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const onAddNewPostClick = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title: post.title,
      description: post.description,
    };

    addNewPost(newPost);

    setPost({
      title: "",
      description: "",
    });
  };

  return (
    <form className={style.postCreatorForm}>
      <CustomInput
        type="text"
        placeholder="post title"
        value={post.title}
        onChange={(e) =>
          setPost((post) => ({
            ...post,
            title: e.target.value,
          }))
        }
      />
      <CustomInput
        type="text"
        placeholder="post description"
        value={post.description}
        onChange={(e) =>
          setPost((post) => ({
            ...post,
            description: e.target.value,
          }))
        }
      />
      <CustomButton onClick={onAddNewPostClick}>Add Post</CustomButton>
    </form>
  );
}

export default PostCreator;
