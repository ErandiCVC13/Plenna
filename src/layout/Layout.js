import InformationView from "@src/components/shared/molecule/InformationView";
import NavBar from "@src/components/shared/atoms/NavBar/NavBar";
import { useRouter } from "next/router";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  return pathname === "/login" ? (
    <div>{children}</div>
  ) : (
    <>
      <NavBar></NavBar>
      <main className={styles.mainContainer}>
        <InformationView></InformationView>
        <section className={styles.sectionContainer}>{children}</section>
      </main>
    </>
  );
};

export default Layout;
