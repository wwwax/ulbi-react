import PostItem from "./PostItem";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <PostItem
        post={{
          id: 1,
          title: "Javascript",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, perspiciatis quia nihil animi illum cum neque nesciunt maiores ducimus nam!",
        }}
      />
    </div>
  );
}

export default App;
