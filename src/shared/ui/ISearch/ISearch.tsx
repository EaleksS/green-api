import { FC } from "react";
import styles from "./ISearch.module.scss";
import { IoSearch } from "react-icons/io5";

export const ISearch: FC = (): JSX.Element => {
  return (
    <label className={styles.search}>
      <IoSearch style={{ opacity: 0.5, cursor: "pointer" }} size={20} />
      <div>
        <input type="text" placeholder="Поиск" />
      </div>
    </label>
  );
};
