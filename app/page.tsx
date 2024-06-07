import Image from "next/image";
import styles from "./page.module.css";
import ConnectButton from "@/component/connect-button";
import { auth } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await auth();
  return (
    <main className={styles.main}>
      <ConnectButton />
      <h1>Session:</h1>
      <code>{JSON.stringify(session, null, 2)}</code>
    </main>
  );
}
