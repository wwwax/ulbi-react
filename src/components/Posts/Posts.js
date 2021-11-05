import PostCreator from "../PostCreator";
import List from "../List";
import style from "./Posts.module.css";

function Posts({ posts, addNewPost, deletePost }) {
  return (
    <div className={style.posts}>
      <h1 className={style.postsTitle}>{posts.title}</h1>
      <PostCreator addNewPost={addNewPost} />
      <List items={posts.data} deletePost={deletePost} />
    </div>
  );
}

export default Posts;
