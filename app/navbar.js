import React from "react";
import Link from "next/link";

export default function navbar() {
  return (
    <div>
      <nav style={{ padding: "10px 0 10px 0" }}></nav>
      <Link href="/" style={{ padding: "0 5px 0 0 " }}>
        Home
      </Link>
      <Link href="/posts" style={{ padding: "0 5px 0 0 " }}>
        Posts
      </Link>
    </div>
  );
}
