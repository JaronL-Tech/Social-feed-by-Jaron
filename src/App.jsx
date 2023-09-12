import "./App.css";
import Header from "./Components/Header/Header";
import PostList from "./Components/PostList/PostList";
import NewPostForm from "./Components/NewPostForm/NewPostForm";
import Post from "./Components/Post/Post";
import { useState } from "react";
import Toggle from "./Components/Toggles/Toggles";

function App() {
  const [toggle, setToggle] = useState(false);
  const handleToggleChange = () => {
    setToggle(!toggle);

    return (
      <div className="App">
        <Header />
        <PostList />
        <NewPostForm />
        <Post />
        <Toggle toggle={toggle} handleToggleChange={handleToggleChange} />
      </div>
    );
  };
}
export default App;
