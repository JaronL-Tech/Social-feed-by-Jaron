import "./App.css";
import Header from "./Components/Header/Header";
import PostList from "./Components/PostList/PostList";
import NewPostForm from "./Components/NewPostForm/NewPostForm";
import Post from "./Components/Post/Post";

function App() {
  return (
    <div className="App">
      <Header />
      <PostList />
      <NewPostForm />
      <Post />
    </div>
  );
}

export default App;
