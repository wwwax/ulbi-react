import PostItem from "./PostItem";
import styles from "./PostList.module.css";

export default function PostList({ posts, deletePost }) {
  return (
    <div className={styles.post__list}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} deletePost={deletePost} />
      ))}
    </div>
  );
}
