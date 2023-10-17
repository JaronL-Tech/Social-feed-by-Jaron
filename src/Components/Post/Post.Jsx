import React, { useState } from "react";

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLiked, setIsDisLiked] = useState(false);

  const handlelike = (e) => {
    setIsLiked(!isLiked);
    if (isDisLiked === true) {
      setIsDisLiked(!isDisLiked);
    }
  };
  const handleDislike = (e) => {
    setIsDisLiked(!isDisLiked);
    if (isLiked === true) {
      setIsLiked(!isLiked);
    }
  };
  const likeBtnClass = isLiked ? "like-btn" : "";
  const disLikeBtnClass = isDisLiked ? "disliked-btn" : "";

  return (
    post && (
      <div>
        <h4>{post.userName}</h4>
        <p>{post.postContent}</p>
        <button className={likeBtnClass} onClick={handlelike}>
          Like
        </button>
        <button className={disLikeBtnClass} onClick={handleDislike}>
          Dislike
        </button>
      </div>
    )
  );
};

export default Post;
