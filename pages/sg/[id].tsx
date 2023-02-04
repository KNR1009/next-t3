import { GetStaticProps, NextPage } from "next";

const SGPage: NextPage<{ id: number }> = (props) => {
  return <p>このページは{props.id}</p>;
};

export default SGPage;

// ダイナミックルートのパスを指定する
export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log("SG");

  return {
    props: { id: params?.id },
  };
};
