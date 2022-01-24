import Button from "@src/components/shared/atoms/Button";
import Typography from "@src/components/shared/atoms/Typography";
import HistoryCard from "@src/components/shared/molecule/HistoryCard";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

const Home = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Plenn</title>
        <meta name="description" content="Plenna app for appointments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <div className={styles.sectionContainer}>
        <div className={styles.buttonContainer}>
          <Button
            variant="secondary"
            onClick={() => router.push("/new-appointment")}
          >
            <Typography variant="small">Iniciar nueva consulta +</Typography>
          </Button>
        </div>
        <div className={styles.titleContainer}>
          <Typography variant="h1" color="primary">
            Historial:
          </Typography>
        </div>
        <div className={styles.containerHistory}>
          <HistoryCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
