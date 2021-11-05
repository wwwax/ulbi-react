import { useState } from "react";

function PostCreator() {
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      description,
    };

    setPosts((posts) => [...posts, newPost]);

    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h2>Form</h2>
      <form>
        <CustomInput
          type="text"
          placeholder="post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <CustomInput
          type="text"
          placeholder="post description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <CustomButton onClick={addNewPost}>Add Post</CustomButton>
      </form>
      <hr />
    </div>
  );
}

export default PostCreator;
