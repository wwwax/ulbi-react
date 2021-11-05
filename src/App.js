import Header from "./components/Header";
import List from "./components/List";
import { posts } from "./data";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <List title={posts.title} items={posts.data} />
      </div>
    </div>
  );
}

export default App;
