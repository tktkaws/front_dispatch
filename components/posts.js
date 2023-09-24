import styles from "styles/posts.module.css";
import Link from "next/link";
import Image from "next/image";
import ConvertDate from "components/convert-date";
import PostCategories from "components/post-categories";

export default function Posts({ posts }) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(
        ({ title, slug, eyecatch, publishedAt, categories }, index) => (
          <article className={styles.post} key={slug}>
            {/* <figure className={styles.thumb}>
              <Link href={`/blog/${slug}`}>
                <Image
                  src={eyecatch.url}
                  alt=""
                  layout="fixed"
                  objectFit="cover"
                  width={96}
                  height={96}
                  placeholder="blur"
                  blurDataURL={eyecatch.blurDataURL}
                />
              </Link>
            </figure> */}

            <Link href={`/blog/${slug}`}>
              <h2>{title}</h2>
            </Link>
            <div className={styles.sub}>
              <div className={styles.date}>
                <ConvertDate dateISO={publishedAt} />
              </div>

              <PostCategories categories={categories} />
            </div>
          </article>
        )
      )}
      {/* <div className={styles.sample}></div>
      <div className={styles.sample_2}></div>
      <div className={styles.sample_3}></div>
      <div className={styles.sample_4}></div> */}
    </div>
  );
}
