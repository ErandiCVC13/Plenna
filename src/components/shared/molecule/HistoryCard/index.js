import Typography from "../../atoms/Typography";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@src/config/firebase.config";

import styles from "./HistoryCard.module.css";

const HistoryCard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "appointments ");
    const q = query(collectionRef, orderBy("create", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setAppointments(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          create: doc.data().create,
        }))
      );
    });
    return unsubscribe;
  }, []);

  const dataNormalization = (data) => {
    const appointments = data.map((appointment) => {
      const serverTimestamp = appointment.create.seconds;

      const date = new Date(serverTimestamp);

      const objetAppointment = [
        {
          label: "Fecha",
          value: `${date}`,
        },
        { label: "Doctor", value: `${appointment.doctor}` },
        { label: "Padecimiento", value: `${appointment.suffering}` },
        { label: "Tipo de consulta", value: `${appointment.type}` },
      ];

      return objetAppointment;
    });
    return appointments;
  };

  return dataNormalization(appointments).map((appointment, i) => (
    <div className={styles.card} key={i}>
      {appointment.map((item) => (
        <div className={styles.cardItemContainer} key={`${item.label}_${i}`}>
          <div style={{ paddingRight: "0.5rem" }}>
            <Typography variant="h6" color="primary">
              {item.label}:
            </Typography>
          </div>
          <div style={{ paddingLeft: "0.5rem" }}>
            <Typography variant="small">{item.value}</Typography>
          </div>
        </div>
      ))}
    </div>
  ));
};

export default HistoryCard;
