import Link from "next/link";
import Meta from "components/meta";
import Hero from "components/hero";
import Image from "next/image";
import eyecatch from "images/about.jpg";
import styles from "styles/about.module.css";
import works from "images/works03_mv.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <>
      <Meta
        pageTitle="About"
        pageDesc="タカハシタカユキについて"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <div className={styles.container}>
        <h1>About</h1>
        <h2>髙橋孝幸</h2>
        <p>神奈川県平塚市在住</p>
        <p>1986年生まれ</p>
        <h2>略歴</h2>
        <p>早稲田大学政治経済学部経済学科卒業</p>
        <p>倉庫事務職の業務で必要性を感じマクロを独学で習得する</p>
        <p>
          当初はバックエンドを志すが、画面を作ることに喜びを覚えフロントエンドの道を目指し始めた
        </p>
        <p>Jamstackとwebglに強い関心がある</p>
        <h2>趣味</h2>
        <p>映画 , ゲーム , ラジオ</p>
        <h2>ポートフォリオ</h2>
        <p className={styles.image}>
          <a
            target="_blank"
            href="https://tk-tk.site/"
            rel="noopener noreferrer"
          >
            <Image
              src={works}
              alt=""
              layout="fill"
              objectFit="cover"
              sizes="(min-width: 600px) 600px, 60vw"
              priority
              placeholder="blur"
            ></Image>
          </a>
        </p>
        <p>
          <a
            target="_blank"
            href="https://tk-tk.site/"
            rel="noopener noreferrer"
          >
            https://tk-tk.site/
          </a>
        </p>

        <h2>Contact</h2>
        <p>
          <a href="mailto:ttkaws15@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className={styles.url}>ttkaws15@gmail.com</span>
          </a>
        </p>
        <p>
          <a
            target="_blank"
            href="https://github.com/tktkaws"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span className={styles.url}>https://github.com/tktkaws</span>
          </a>
        </p>
        <p>
          <a
            target="_blank"
            href="https://twitter.com/takaws"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
            <span className={styles.url}>https://twitter.com/takaws</span>
          </a>
        </p>
      </div>
    </>
  );
}
