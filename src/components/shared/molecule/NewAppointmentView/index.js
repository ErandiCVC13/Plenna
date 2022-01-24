import { AppointmentContext } from "@src/context/AppointmentContext";
import { withProtected } from "@src/hook/routes";
import { useRouter } from "next/router";
import { useContext } from "react";
import Button from "@src/components/shared/atoms/Button";
import TextArea from "@src/components/shared/atoms/TextArea";
import Typography from "@src/components/shared/atoms/Typography";

import styles from "./NewAppointment.module.css";

const NewAppointmentView = () => {
  const router = useRouter();

  const { dataAppointment, setDataAppointment } =
    useContext(AppointmentContext);

  return (
    <div className={styles.newAppointmentViewContainer}>
      <TextArea
        name="suffering"
        label="Padecimiento"
        value={dataAppointment.suffering}
        onChange={(e) =>
          setDataAppointment({
            ...dataAppointment,
            suffering: e.target.value,
          })
        }
      />
      <TextArea
        name="physical_exploration"
        label="Exploración física"
        value={dataAppointment.physical_exploration}
        onChange={(e) =>
          setDataAppointment({
            ...dataAppointment,
            physical_exploration: e.target.value,
          })
        }
      />
      <TextArea
        name="diagnosis"
        label="Diagnóstico"
        value={dataAppointment.diagnosis}
        onChange={(e) =>
          setDataAppointment({
            ...dataAppointment,
            diagnosis: e.target.value,
          })
        }
      />
      <TextArea
        name="recipe_treatment"
        label="Receta y tratamiento"
        value={dataAppointment.recipe_treatment}
        onChange={(e) =>
          setDataAppointment({
            ...dataAppointment,
            recipe_treatment: e.target.value,
          })
        }
      />
      <TextArea
        name="patient_notes"
        label="Notas para paciente"
        value={dataAppointment.patient_notes}
        onChange={(e) =>
          setDataAppointment({
            ...dataAppointment,
            patient_notes: e.target.value,
          })
        }
      />
      <Button
        variant="tertiary"
        customClass={styles.buttonNext}
        onClick={() => router.push("/checkout")}
      >
        <Typography variant="small">Cierre de consulta</Typography>
      </Button>
    </div>
  );
};
export default withProtected(NewAppointmentView);
