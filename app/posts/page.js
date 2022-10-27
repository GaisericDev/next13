import React from "react";
import { use } from "react";

const getPosts = async () => {
  let posts = await fetch("https://dummyjson.com/posts?limit=3");

  return posts.json();
};

export default function post() {
  let { posts } = use(getPosts());
  console.log(posts);
  return (
    <div>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}