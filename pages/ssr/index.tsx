import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import React from "react";

type Post = {
  id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
};

// クライアント側での処理
const SSRPage: NextPage<{ posts: Post[] }> = (props) => {
  return (
    <>
      <Link href="/">home</Link>
      {props.posts &&
        props.posts.map((post) => (
          <div key={post.id}>
            <p>
              {post.id}:{post.title}
            </p>
          </div>
        ))}
    </>
  );
};
export default SSRPage;

// サーバー側での処理
export const getServerSideProps: GetServerSideProps<{ posts: Post[] }> = async (
  context
) => {
  const res = await axios.get("http://127.0.0.1:3000/api/posts");
  // const res = await axios.get("http://127.0.0.1:3005/posts");
  const result = await res.data;
  const posts: Post[] = result.map((i: Post) => {
    return {
      id: i.id,
      title: i.title,
      body: i.body,
      created_at: i.created_at,
      updated_at: i.updated_at,
    };
  });

  return {
    props: { posts },
  };
};
