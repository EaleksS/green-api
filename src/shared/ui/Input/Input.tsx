import { Dispatch, FC } from "react";
import styles from "./Input.module.scss";

interface Props {
  type?: "textarea";
  placholder?: string;
  value?: string;
  setValue?: Dispatch<React.SetStateAction<string>>;
}

export const Input: FC<Props> = ({
  type = "text",
  placholder,
  value,
  setValue,
}): JSX.Element => {
  switch (type) {
    case "textarea":
      return (
        <label className={`${styles.label} ${styles.default}`}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <textarea
              placeholder={placholder ? placholder : "Введите сообщения"}
              value={value}
              onChange={(e) => setValue && setValue(String(e.target.value))}
            />
          </div>
        </label>
      );

    default:
      return (
        <label className={`${styles.label} ${styles.default}`}>
          <div>
            <input
              type="text"
              placeholder={placholder ? placholder : "Текст"}
            />
          </div>
        </label>
      );
  }
};
