import { useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import { postsData } from "./data";

function App() {
  const [posts, setPosts] = useState(postsData);

  const addNewPost = (newPost) => {
    setPosts((posts) => {
      return {
        ...posts,
        data: [...posts.data, newPost],
      };
    });
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Posts posts={posts} addNewPost={addNewPost} />
      </div>
    </div>
  );
}

export default App;
