import Post from "../Post/Post";

const PostList = ({ posts = {} }) => {
  return (
    posts && (
      <div className="PostList">
        <h4>My Posts</h4>
        <div>
          {posts.map((post, i) => {
            return <Post key={post.userName} post={post} />;
          })}
        </div>
      </div>
    )
  );
};

export default PostList;
