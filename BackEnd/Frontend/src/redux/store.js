// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import doctorReducer from "../features/doctor/doctorsSlice"
import patientReducer from "../features/patient/patientsSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    doctorsdetails: doctorReducer,
    patientsdetails: patientReducer,
  },
});

export default store;
