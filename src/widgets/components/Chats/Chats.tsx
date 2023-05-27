import { FC } from "react";
import styles from "./Chats.module.scss";
import { Button, ISearch, Text } from "../../../shared";

export const Chats: FC = (): JSX.Element => {
  return (
    <div className={styles.chats}>
      <nav className={styles.nav}>
        <img
          src="https://pps.whatsapp.net/v/t61.24694-24/328771875_609455957397108_9190785479640371407_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTgn8aF8ELfRMGR7wctrt2aCRT2VGRnVpFU9AGjpo0sPw&oe=647E903B"
          alt="user"
        />
        <Button>Выйти</Button>
      </nav>
      <div className={styles.content}>
        <div className={styles.search}>
          <ISearch />
        </div>
      </div>
      <div className={styles.messages}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15].map((e) => (
          <div className={styles.mess} key={e}>
            <img
              src="https://pps.whatsapp.net/v/t61.24694-24/328771875_609455957397108_9190785479640371407_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTgn8aF8ELfRMGR7wctrt2aCRT2VGRnVpFU9AGjpo0sPw&oe=647E903B"
              alt=""
            />
            <div className={styles.text}>
              <Text type="h3">Иностранный язык</Text>
              <Text>Lorem ipsum dolor</Text>
              <div className={styles.datetime}>
                <Text>10:20</Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
