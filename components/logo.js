import Link from "next/link";
// import styles from "styles/logo.module.css";
import Image from "next/image";
import logo from "images/logo0308.png";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt=""
        layout="fixed"
        width={300}
        height={150}
        priority
        placeholder="blur"
      ></Image>
    </Link>
  );
}
