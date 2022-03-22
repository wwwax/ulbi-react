import styles from "./App.module.css";
import { useState } from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";
import CustomSelect from "./ui/CustomSelect";
import CustomInput from "./ui/CustomInput";

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

  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = getSortedPosts();

  function addNewPost(post) {
    setPosts((posts) => [...posts, post]);
  }

  function deletePost(id) {
    setPosts((posts) => posts.filter((post) => post.id !== id));
  }

  function sortPosts(sort) {
    setSelectedSort(sort);
  }

  function getSortedPosts() {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    } else {
      return posts;
    }
  }

  return (
    <div className={styles.app}>
      <PostForm addNewPost={addNewPost} />

      <hr
        style={{
          margin: "20px 0",
          backgroundColor: "cornflowerblue",
        }}
      />

      <CustomInput
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => {
          console.log("e.target.value :>> ", e.target.value);
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
        <PostList posts={sortedPosts} title={"Posts"} deletePost={deletePost} />
      )}
    </div>
  );
}
