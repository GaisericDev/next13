import React from "react";
import { use } from "react";

const getPost = async (id) => {
  let post = await fetch(`https://dummyjson.com/posts/${id}`);
  return post.json();
};

export default function page({ params }) {
  let id = params.id;
  let post = use(getPost(id));
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}
