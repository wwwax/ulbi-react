import PostItem from "./PostItem";

export default function PostList({ posts, title, deletePost }) {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{title}</h2>

      {posts.map((post, index) => (
        <PostItem
          post={post}
          key={post.id}
          number={index + 1}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
}
