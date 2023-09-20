import { getAllPosts } from "lib/api";
import Head from "next/head";
import Image from "next/image";
import Meta from "components/meta";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "components/header";
import Footer from "components/footer";
import Hero from "components/hero";
import Layout from "components/layout";
import Posts from "components/posts";
import Pagination from "components/pagination";
// import { client } from "lib/api";
import { getPlaiceholder } from "plaiceholder";

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from "lib/constants";
import Nav from "@/components/nav";

export default function Home({ posts }) {
  return (
    <>
      <Meta />

      {/* <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn /> */}
      <Nav />

      <Posts posts={posts} />

      {/* <Pagination nextUrl="/blog" nextText="More Posts" /> */}
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      posts: posts,
    },
  };
}
