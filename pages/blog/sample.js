import { client } from "lib/api";
import { getPostBySlug } from "lib/api";
import { extractText } from "lib/extract-text";
import PostHeader from "components/post-header";
import Image from "next/image";
import ConvertBody from "components/convert-body";
import PostBody from "components/post-body";
import PostCategories from "components/post-categories";

import Hero from "components/hero";
import Meta from "components/meta";

export default function Sample({
  title,
  content,
  publish,
  eyecatch,
  categories,
  description,
}) {
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
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />

        <figure>
          <Image
            key={eyecatch.url}
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
          />
        </figure>
        <PostBody>
          <ConvertBody contentHTML={content} />
        </PostBody>
        <PostCategories categories={categories} />
      </article>
    </>
  );
}

export async function getStaticProps(context) {
  const slug = "html";

  const post = await getPostBySlug(slug);

  const description = extractText(post.content);

  return {
    props: {
      title: post.title,
      content: post.content,
      publish: post.publishedAt,
      eyecatch: post.eyecatch,
      categories: post.categories,
      description: description,
    },
  };
}
