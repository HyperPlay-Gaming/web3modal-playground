import Image from "next/image";
import styles from "./page.module.css";
import ConnectButton from "@/component/connect-button";

export default function Home() {
  return (
    <main className={styles.main}>
      <ConnectButton />
    </main>
  );
}
