import React from "react";
import { useSelector } from "react-redux";

export default function Exampletest() {
  // Use useSelector to access patientCount and doctorCount from the Redux store
  const storePatientValue = useSelector((state) => state.counter.patientCount);
  const storeDoctorValue = useSelector((state) => state.counter.doctorCount);

  return (
    <div>
      <div>Patient Count: {storePatientValue}</div>
      <div>Doctor Count: {storeDoctorValue}</div>
    </div>
  );
}
