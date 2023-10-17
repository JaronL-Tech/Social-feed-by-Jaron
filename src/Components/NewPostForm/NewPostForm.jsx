import React, { useState } from "react";
import "./NewPostForm.css";

const NewPostForm = ({ onNewPost }) => {
  const [submitting, setSubmitting] = useState(false);
  onst[(postContent, setPostContent)] = useState("");
  const [userName, setUserName] = useState("");
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
      <TextField label="UserName" value={userName} onChange={setUserName} />
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
