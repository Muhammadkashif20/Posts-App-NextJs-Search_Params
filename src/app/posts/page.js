import PostsInput from "../Components/postInput";

async function Posts() {
  let res = await fetch("https://dummyjson.com/posts");
  res = await res.json();
  return (
    <div className="my-5">
      <h1 className="text-center font-mono font-bold text-2xl">Posts</h1>
      <PostsInput />
      <div className="  m-10 gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {res.posts.map((posts) => {
          return (
            <div className="py-5  bg-gray-50 ">
              <h1 className="  text-center  font-bold text-2xl">
                {posts.title}
              </h1>
              <div className=" flex justify-around my-5">
                <span>Views: {posts.views}</span>
                <span>Likes: {posts.reactions.likes}</span>
                <span>Dislikes: {posts.reactions.dislikes}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Posts;