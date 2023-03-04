import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <p>Blog</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
