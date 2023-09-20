import styles from "styles/post-header.module.css";
import ConvertDate from "components/convert-date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { eyecatchLocal } from "lib/constants";

export default function PostHeader({
  title,
  subtitle,
  eyecatch,
  publish = "",
}) {
  return (
    <div className={styles.grid}>
      {/* <p className={styles.subtitle}>{subtitle}</p> */}

      {/* <figure className={styles.image}>
        <Image
          key={eyecatch.url}
          src={eyecatch.url}
          alt=""
          width="150"
          height="150"
          priority
          placeholder="blur"
          blurDataURL={eyecatch.blurDataURL}
        />
      </figure> */}
      <h1 className={styles.title}>{title}</h1>

      {publish && (
        <div className={styles.publish}>
          {/* <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" /> */}
          <ConvertDate dateISO={publish} />
        </div>
      )}
    </div>
  );
}
