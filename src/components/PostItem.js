import styles from "./PostItem.module.css";

function PostItem(props) {
  return (
    <div className={styles.postItem}>
      <div className={styles.postItem__content}>
        <strong>{`${props.post.id}. ${props.post.title}`}</strong>
        <div>{props.post.body}</div>
      </div>

      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
  );
}

export default PostItem;
