import Link from "next/link";
import Header from "./components/Header.jsx";
import "./globals.css";
const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  // console.log(posts);
  return (
    <div>
      <main className="p-4 w-10/12 mx-auto">
        <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
        <ul className="grid grid-cols-4">
          {posts.slice(0, 10).map((post) => (
            <li key={post.id} className="mb-2">
              <div className="card bg-base-100 w-56 min-h-96  p-2 shadow-xl">
                <div className="card-body p-2">
                  <p>{post.id}</p>
                  <h2 className="card-title text-2xl">blog{post.title}!</h2>
                  <p>{post.title}</p>
                  <div className="card-actions justify-end">
                    <Link
                      href={`/details/${post.id}`}
                      className="btn btn-sm btn-primary"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
