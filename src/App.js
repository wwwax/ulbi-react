import { useState } from "react";
import Header from "./components/Header";
import CustomSelect from "./components/UI/CustomSelect";
import Posts from "./components/Posts";
import { postsData } from "./data";

function App() {
  const [posts, setPosts] = useState(postsData);
  const [selectedSort, setSelectedSort] = useState("");

  const addNewPost = (newPost) => {
    setPosts((posts) => [...posts, newPost]);
  };

  const deletePost = (id) => {
    setPosts((posts) => posts.filter((post) => post.id !== id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts((posts) => posts.sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <CustomSelect
          defaultValue="Cортировка"
          options={[
            {
              value: "title",
              name: "по названию",
            },
            {
              value: "description",
              name: "по описанию",
            },
          ]}
          value={selectedSort}
          onChange={sortPosts}
        />
        <Posts posts={posts} addNewPost={addNewPost} deletePost={deletePost} />
      </div>
    </div>
  );
}

export default App;
