import styles from "./PostItem.module.css";
import CustomButton from "./CustomButton";

export default function PostItem({ post, deletePost }) {
  return (
    <div className={styles.post__item}>
      <div className={styles.post__wrapper}>
        <div className={styles.post__id}>{post.id}</div>

        <div className={styles.post__content}>
          <div className={styles.post__title}>{post.title}</div>
          <div className={styles.post__body}>{post.body}</div>
        </div>
      </div>

      <div className={styles.btns__wrapper}>
        <CustomButton>Open</CustomButton>

        <CustomButton customOnClick={() => deletePost(post.id)}>
          Delete
        </CustomButton>
      </div>
    </div>
  );
}
