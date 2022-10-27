import React from "react";

export default function page({ params }) {
  let id = params.id;
  return <div>{id}</div>;
}
