import Typography from "@src/components/shared/atoms/Typography";
import dataSource from "@src/data/patientInformation";
import avatar from "@assets/Plenna-mockup.png";
import { withProtected } from "@src/hook/routes";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@src/config/firebase.config";

import styles from "./InformationView.module.css";

const InformationView = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.informationContainer}>
        <div className={styles.containerImage}>
          <img
            src={avatar.src}
            alt="Avatar"
            className={styles.patientImage}
          ></img>
        </div>
        {dataSource.information.map((item, i) => (
          <div key={i} className={styles.containerFlex}>
            <div style={{ justifySelf: "flex-end", paddingRight: "0.5rem" }}>
              <Typography variant="h5" color="primary">
                {item.label}
              </Typography>
            </div>
            <div style={{ justifySelf: "flex-start", paddingLeft: "0.5rem" }}>
              <Typography variant="h6">{item.value}</Typography>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};
export default withProtected(InformationView);
