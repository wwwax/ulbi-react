import styles from "./App.module.css";
import { useState } from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";
import CustomSelect from "./ui/CustomSelect";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "HTML",
      body: "abcd",
    },
    {
      id: 2,
      title: "CSS",
      body: "cdef",
    },
    {
      id: 3,
      title: "JavaScript",
      body: "bcde",
    },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const addNewPost = (post) => setPosts((posts) => [...posts, post]);

  const deletePost = (id) =>
    setPosts((posts) => posts.filter((post) => post.id !== id));

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts((posts) => posts.sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className={styles.app}>
      <PostForm addNewPost={addNewPost} />

      <hr
        style={{
          margin: "20px 0",
          backgroundColor: "cornflowerblue",
        }}
      />

      <CustomSelect
        defaultValue="Sorting"
        value={selectedSort}
        options={[
          {
            name: "Sort by name",
            value: "title",
          },
          {
            name: "Sort by description",
            value: "body",
          },
        ]}
        onSelectChange={sortPosts}
      />

      {posts.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>Empty List</h2>
      ) : (
        <PostList posts={posts} title={"Posts"} deletePost={deletePost} />
      )}
    </div>
  );
}
