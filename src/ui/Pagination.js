import styles from "./Pagination.module.css";
import CustomButton from "./CustomButton";
import { getPagesArray } from "../utils/pages";

export default function Pagination({ totalPages, changePage, page }) {
  const pagesArray = getPagesArray(totalPages);

  return (
    <div className={styles.pagination}>
      {pagesArray.map((item) => {
        return (
          <CustomButton key={item} onClick={() => changePage(item)}>
            <span
              className={
                item === page
                  ? `${styles.pagination__page} ${styles.pagination__page_current}`
                  : styles.pagination__page
              }
            >
              {item}
            </span>
          </CustomButton>
        );
      })}
    </div>
  );
}
