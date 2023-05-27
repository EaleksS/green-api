import { FC, useEffect, useRef, useState } from "react";
import styles from "./Chat.module.scss";
import { Input, Text } from "../../../shared";
import { IoMdSend } from "react-icons/io";

export const Chat: FC = (): JSX.Element => {
  // Плавный переход
  const [renderScroll] = useState<number>(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  function scrollToMyElement() {
    bottomRef.current?.scrollIntoView(true);
  }

  useEffect(() => {
    scrollToMyElement();
  }, [renderScroll]);
  // /Плавный переход

  return (
    <div className={styles.chat}>
      <nav className={styles.nav}>
        <img
          src="https://pps.whatsapp.net/v/t61.24694-24/328771875_609455957397108_9190785479640371407_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTgn8aF8ELfRMGR7wctrt2aCRT2VGRnVpFU9AGjpo0sPw&oe=647E903B"
          alt="user"
        />
        <Text type="h3">Алексеев Эрнест</Text>
      </nav>
      <div className={styles.messages}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((e) => (
          <div className={`${styles.message}  ${e % 2 === 0 && styles.me}`}>
            <div className={`${styles.content}`}>
              <Text type="h3">Lorem ipsum dolor sit amet consectetur</Text>
              <div className={styles.datetime}>
                <Text>10:20</Text>
              </div>
            </div>
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>
      <div className={styles.send}>
        <Input type="textarea" />
        <div className={styles.btn}>
          <IoMdSend style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};
