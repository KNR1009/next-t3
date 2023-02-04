import axios from "axios";
import { GetStaticProps, NextPage } from "next";

type Post = {
  id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
};
const SGPage: NextPage<{ post: Post }> = (props) => {
  return <p>このページは{props.post.title}</p>;
};

export default SGPage;

// ダイナミックルートのid一覧を取得する
export const getStaticPaths = async () => {
  const result = await axios
    .get("http://127.0.0.1:3005/posts")
    .then((res) => res.data);
  if (!result) return;
  const paths = result.map((i: Post) => ({
    params: { id: String(i.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async ({
  params,
}) => {
  const post = await axios
    .get(`http://127.0.0.1:3005/posts/${params?.id}`)
    .then((res) => res.data);
  return {
    props: { post },
  };
};
