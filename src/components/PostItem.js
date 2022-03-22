import styles from "./PostItem.module.css";

export default function PostItem(props) {
  return (
    <div className={styles.postItem}>
      <div className={styles.postItem__content}>
        <strong>{`${props.number}. ${props.post.title}`}</strong>
        <div>{props.post.body}</div>
      </div>

      <div className={styles.postItem__btns}>
        <button>Delete</button>
      </div>
    </div>
  );
}
