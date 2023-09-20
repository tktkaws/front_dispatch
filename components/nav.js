import Link from "next/link";
import styles from "styles/nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/blog/category/html">
            <p>HTML</p>
          </Link>
        </li>
        <li>
          <Link href="/blog/category/css">
            <p>CSS</p>
          </Link>
        </li>
        <li>
          <Link href="/blog/category/javascript">
            <p>JavaScript</p>
          </Link>
        </li>
        <li>
          <Link href="/blog/category/webgl">
            <p>WebGL</p>
          </Link>
        </li>
        <li>
          <Link href="/blog/category/astro">
            <p>Astro</p>
          </Link>
        </li>
        <li>
          <Link href="/blog/category/a11y">
            <p>Accessibility</p>
          </Link>
        </li>
        <li>
          <Link href="/blog/category/other">
            <p>Other</p>
          </Link>
        </li>
        <li>
          <Link href="/blog/category/private">
            <p>Private</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
