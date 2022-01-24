import Typography from "@src/components/shared/atoms/Typography";
import Button from "@src/components/shared/atoms/Button";
import Select from "@src/components/shared/atoms/Select";
import Card from "@src/components/shared/atoms/Card";
import selectsData from "@src/data/selectsData";
import { db } from "@src/config/firebase.config";
import { withProtected } from "@src/hook/routes";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppointmentContext } from "@src/context/AppointmentContext";

import styles from "./Checkout.module.css";

const CheckoutView = ({ auth }) => {
  const router = useRouter();
  const { user } = auth;

  const { dataAppointment, setDataAppointment } =
    useContext(AppointmentContext);

  const onSubmit = async () => {
    const collectionRef = await collection(db, "appointments ");
    const docRef = await addDoc(collectionRef, {
      ...dataAppointment,
      doctor: `${user.multiFactor.user.displayName}`,
      create: serverTimestamp(),
    });

    setDataAppointment({
      ...dataAppointment,
      doctor: "",
      suffering: "",
      physical_exploration: "",
      recipe_treatment: "",
      diagnosis: "",
      patient_notes: "",
    });

    router.push("/");
  };

  const handleOnChangeSelectType = (value) => {
    setDataAppointment({
      ...dataAppointment,
      type: value,
    });
  };
  const handleOnChangeSelectMedical = (value) => {
    setDataAppointment({
      ...dataAppointment,
      medical_studies: value,
    });
  };
  const handleOnChangeSelectService = (value) => {
    setDataAppointment({
      ...dataAppointment,
      service: value,
    });
  };
  const handleOnChangeSelectProduct = (value) => {
    setDataAppointment({
      ...dataAppointment,
      products: value,
    });
  };

  const dataNormalization = (data) => {
    const objetAppointment = [
      {
        title: "Padecimiento",
        secondaryText: `${data.suffering}`,
      },
      {
        title: "Exploración física",
        secondaryText: `${data.physical_exploration}`,
      },
      {
        title: "Diagnóstico",
        secondaryText: `${data.diagnosis}`,
      },
      {
        title: "Receta y tratamiento",
        secondaryText: `${data.recipe_treatment}`,
      },
      {
        title: "Notas para paciente",
        secondaryText: `${data.patient_notes}`,
      },
    ];

    return objetAppointment;
  };

  return (
    <div className={styles.cardsContainer}>
      {dataNormalization(dataAppointment).map((item, i) => (
        <Card
          title={item.title}
          secondaryText={item.secondaryText}
          key={`${item}_${i}`}
        ></Card>
      ))}

      <div className={styles.selectsContainer}>
        <Select
          options={selectsData.options[0]}
          onChange={handleOnChangeSelectType}
        ></Select>
        <Select
          options={selectsData.options[1]}
          onChange={handleOnChangeSelectMedical}
        ></Select>
        <Select
          options={selectsData.options[2]}
          onChange={handleOnChangeSelectService}
        ></Select>
        <Select
          options={selectsData.options[3]}
          onChange={handleOnChangeSelectProduct}
        ></Select>{" "}
        <Button
          variant="primary"
          customClass={styles.buttonNext}
          onClick={onSubmit}
        >
          <Typography variant="small">Enviar Información</Typography>
        </Button>
      </div>
    </div>
  );
};
export default withProtected(CheckoutView);
