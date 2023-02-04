import { NextPage } from "next";

const SGPage: NextPage<{ title: string }> = (props) => {
  return <p>{props.title}</p>;
};

export default SGPage;

export const getStaticProps = async () => {
  console.log("SG");

  return {
    props: { title: "タイトル" },
  };
};
