import Link from "next/link";

const PostDetails = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="mx-auto p-4 w-10/12 h-full">
      <h1 className="mb-4 font-bold text-4xl">{post.title}</h1>
      <p className="text-lg">{post.body}</p>
      <Link href="/" className="mt-4 btn btn-secondary">
        Back to Home
      </Link>
    </div>
  );
};

export default PostDetails;
