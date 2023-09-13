import "./App.css";
import Header from "./Components/Header/Header";
import PostList from "./Components/PostList/PostList";
import NewPostForm from "./Components/NewPostForm/NewPostForm";
import { useState } from "react";
import Toggle from "./Components/Toggles/Toggles";

function App() {
  const [posts, setPosts] = useState([
    {
      name: "Jaron",
      post: "I am an awesome big brother!",
    },
    {
      name: "Amy",
      post: "I agree!",
    },
  ]);

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <NewPostForm />
        <PostList posts={posts} />
        {/* <Toggle toggle={toggle} handleToggleChange={handleToggleChange} /> */}
      </div>
    </div>
  );
}

export default App;
