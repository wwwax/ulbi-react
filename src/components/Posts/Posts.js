import PostCreator from "../PostCreator";
import List from "../List";
import style from "./Posts.module.css";

function Posts({ posts, addNewPost, deletePost }) {
  return (
    <div className={style.posts}>
      <h1 className={style.postsTitle}>Posts</h1>
      <PostCreator addNewPost={addNewPost} />

      {posts.length !== 0 ? (
        <List items={posts} deletePost={deletePost} />
      ) : (
        <div>
          <h2 style={{ textAlign: "center", padding: "20px 0" }}>
            Post List Is Empty
          </h2>
        </div>
      )}
    </div>
  );
}

export default Posts;
