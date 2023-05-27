import { FC } from "react";
import { Chat, Chats, Layout } from "../../widgets";
import styles from "./Main.module.scss";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.container}>
        <Chats />
        <Chat />
      </div>
    </Layout>
  );
};
