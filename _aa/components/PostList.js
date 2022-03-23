import PostItem from "./PostItem";

export default function PostList({ posts, title, deletePost }) {
  if (!posts.length) {
    return <h2 style={{ textAlign: "center" }}>Empty List</h2>;
  }

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
