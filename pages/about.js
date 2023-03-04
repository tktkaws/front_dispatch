import Hero from "components/hero";
import Image from "next/image";
import eyecatch from "images/about.jpg";

export default function About() {
  return (
    <>
      <Hero title="ABOUT" subtitle="About Me" />
      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        ></Image>
      </figure>
    </>
  );
}
