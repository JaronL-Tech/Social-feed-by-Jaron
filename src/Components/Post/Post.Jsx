import React, { useState } from "react";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="flex-item">
      <p>{post.name}</p>
      <p>{post.post}</p>
    </div>
  );
};

export default Post;
