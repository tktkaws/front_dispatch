import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "components/header";
import Footer from "components/footer";
import Hero from "components/hero";
import Layout from "components/layout";
// import { client } from "lib/api";

export default function Home() {
  return <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />;
}

// // データをテンプレートに受け渡す部分の処理を記述します
// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: "blog" });

//   return {
//     props: {
//       blog: data.contents,
//     },
//   };
// };
