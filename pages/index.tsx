import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useAsync } from "react-use";
import axios from "axios";

const Home: NextPage = () => {
  useAsync(async () => {
    const result = await axios
      .get("http://localhost:3000/api/posts")
      .then((res) => res.data);
    console.log(result);
  }, []);
  return (
    <div className={styles.container}>
      <Link href="/ssr">ssr</Link>
      <Link href="/sg">sg</Link>
    </div>
  );
};

export default Home;
