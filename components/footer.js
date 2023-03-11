// import Logo from "components/logo";
import Link from "next/link";
import styles from "styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/about">
        <small>&copy; Takayuki Takahashi</small>
      </Link>

      {/* <Logo /> */}
    </footer>
  );
}
