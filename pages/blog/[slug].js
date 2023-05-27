// import { client } from "lib/api";
import { getPostBySlug, getAllSlugs } from "lib/api";
import { extractText } from "lib/extract-text";
import { prevNextPost } from "lib/prev-next-post";
import PostHeader from "components/post-header";
import Image from "next/image";
import { eyecatchLocal } from "lib/constants";
import ConvertBody from "components/convert-body";
import PostBody from "components/post-body";
import PostCategories from "components/post-categories";
import { getPlaiceholder } from "plaiceholder";
import Pagination from "components/pagination";
import { renderToc } from "lib/render-toc";
import { TableOfContents } from "components/contents-table";

import Hero from "components/hero";
import Meta from "components/meta";

export default function Post({
  title,
  content,
  publish,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
}) {
  const toc = renderToc(content);
  console.log(toc);
  return (
    <>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <article>
        <PostHeader
          title={title}
          subtitle="Blog Article"
          publish={publish}
          eyecatch={eyecatch}
        />
        <TableOfContents toc={toc} />

        <PostBody>
          <ConvertBody contentHTML={content} />
        </PostBody>
        {/* <PostCategories categories={categories} /> */}
        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs();

  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    // paths: ["/blog/html", "/blog/html2", "/blog/css"],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;

  const post = await getPostBySlug(slug);

  const description = extractText(post.content);

  const eyecatch = post.eyecatch ?? eyecatchLocal;

  const { base64 } = await getPlaiceholder(eyecatch.url);
  eyecatch.blurDataURL = base64;

  const allSlugs = await getAllSlugs();
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug);

  return {
    props: {
      title: post.title,
      content: post.content,
      publish: post.publishedAt,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
      prevPost: prevPost,
      nextPost: nextPost,
    },
  };
}
