import Logo from "components/logo";
import styles from "styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}
