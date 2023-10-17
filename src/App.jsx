import "./App.css";
import Header from "./Components/Header/Header";
import NewPostForm from "./Components/NewPostForm/NewPostForm";
import Post from "./Components/Post/Post";
import PostList from "./Components/PostList/PostList";
import React, { useState, useEffect } from "react";
function App() {
  const [posts, setPosts] = useState([]);
  const handleNewPost = (newPost) => {
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <NewPostForm onNewPost={handleNewPost} />
        <PostList posts={posts} />
        <Post />
      </div>
    </div>
  );
}

export default App;
