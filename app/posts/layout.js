import React from "react";
import { use } from "react";
import Link from "next/link";

const getPosts = async () => {
  let posts = await fetch("https://dummyjson.com/posts?limit=3");

  return posts.json();
};

export default function Layout({ children }) {
  let { posts } = use(getPosts());
  console.log(posts);
  return (
    <div>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
      <div>{children}</div>
    </div>
  );
}
