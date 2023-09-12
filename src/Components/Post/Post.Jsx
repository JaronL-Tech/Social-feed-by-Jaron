import React, { useState } from "react";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div>
      <p>{post.name}</p>
      <p>{post.post}</p>
    </div>
  );
};

export default Post;
