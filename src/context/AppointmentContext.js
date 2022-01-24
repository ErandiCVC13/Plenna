import { createContext, useState } from "react";

export const AppointmentContext = createContext();

const initialState = {
  create: "",
  diagnosis: "",
  doctor: "",
  id: "",
  medical_studies: "",
  patient_notes: "",
  physical_exploration: "",
  products: "",
  recipe_treatment: "",
  services: "",
  suffering: "",
  type: "",
};

export const AppointmentProvider = ({ children }) => {
  const [dataAppointment, setDataAppointment] = useState(initialState);

  return (
    <AppointmentContext.Provider
      value={{ dataAppointment, setDataAppointment }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};
