import styles from "styles/contents-table.module.css";

export const TableOfContents = ({ toc }) => {
  return (
    <div className={styles.stack}>
      <p className={styles.heading}>目次</p>
      <ul>
        {toc.map((data) => (
          <li key={data.id} className={styles.item}>
            <a href={`#${data.id}`}>{data.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
