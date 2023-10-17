import React, { useState } from "react";

const Post = ({ post }) => {
  const { liked, setLiked } = useState(false);
  const [DisLiked, setDisLiked] = useState(false);

  const handlelike = (e) => {
    setLiked(!liked);
    if (DisLiked === true) {
      setDisLiked(!DisLiked);
    }
  };
  const handleDislike = (e) => {
    setDisLiked(!DisLiked);
    if (liked === true) {
      setLiked(!liked);
    }
  };
  const likeBtnClass = liked ? "like-btn" : "";
  const disLikeBtnClass = DisLiked ? "disliked-btn" : "";

  return (
    post && (
      <div>
        <h4>{Post.userName}</h4>
        <p>{Post.postContent}</p>
        <button>Like</button>
        <button>Dislike</button>
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
