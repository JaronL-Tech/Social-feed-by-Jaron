import Post from "../Post/Post";

const PostList = ({ posts = {} }) => { 
  const postItems = posts.map((post) => (
    <Post key={post.userName} post={post} />
  ));
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
