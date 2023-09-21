import { getAllCategories, getAllPostsByCategory } from "lib/api";
import Meta from "components/meta";
import PostHeader from "components/post-header";
import CategoryHeader from "components/category-header";
import Posts from "components/posts";
import { getPlaiceholder } from "plaiceholder";

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from "lib/constants";
import Nav from "@/components/nav";

export default function Category({ name, posts }) {
  return (
    <>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <Nav />
      <CategoryHeader title={name} subtitle="Blog Category" />
      <Posts posts={posts} />
    </>
  );
}

export async function getStaticPaths() {
  const allCats = await getAllCategories();
  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const catSlug = context.params.slug;

  const allCats = await getAllCategories();
  const cat = allCats.find(({ slug }) => slug === catSlug);
  const posts = await getAllPostsByCategory(cat.id);
  console.log(posts);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      name: cat.name,
      posts: posts,
    },
  };
}
