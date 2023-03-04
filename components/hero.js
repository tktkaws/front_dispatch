import styles from "styles/hero.module.css";
import Image from "next/image";
import cube from "images/cube.jpg";

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      {imageOn && (
        <figure>
          <Image
            src={cube}
            alt=""
            layout="responsive"
            priority
            placeholder="blur"
          ></Image>
        </figure>
      )}
    </>
  );
}
