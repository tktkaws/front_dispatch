import styles from "styles/category-header.module.css";
import ConvertDate from "components/convert-date";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock } from "@fortawesome/free-regular-svg-icons";

export default function CategoryHeader({ title, subtitle, publish = "" }) {
  return (
    <div className={styles.stack}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
