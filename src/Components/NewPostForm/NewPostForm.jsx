import React, { useState } from "react";
import "./NewPostForm.css";
import TextField from "../TextField/TextField";

const NewPostForm = ({ onNewPost }) => {
  const [postContent, setPostContent] = useState("");
  const [Name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      userName,
      postContent,
    };
    onNewPost(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="">
      <TextField label="UserName" value={Name} onChange={setName} />
      <TextField
        label="PostContent"
        value={postContent}
        onChange={setPostContent}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default NewPostForm;
