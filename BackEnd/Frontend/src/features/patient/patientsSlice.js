// patientsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loadDoctorsFromLocalStorage = () => {
  try {
    const serializedPatients = localStorage.getItem("patients");
    return serializedPatients ? JSON.parse(serializedPatients) : [];
  } catch (error) {
    console.error("Error loading doctors from local storage:", error);
    return [];
  }
};

const hasDataInLocalStorage = Boolean(localStorage.getItem("patients"));

const defaultDatas = [
  {
    name: "Harry Stephen",
    imageSrc: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
    age: '41',
    gender: 'Male',
    consultation: 'Gastroenterology',
    insurance: 'Yes',
    prev: 'Nil',
  },
  // ... other default data
];


const initialState = hasDataInLocalStorage ? loadDoctorsFromLocalStorage() : defaultDatas; // Create a new array with the spread operator

const patientsSlice = createSlice({
  name: "patientsdetails",
  initialState,
  reducers: {
    patientsAdded: {
      reducer(state, action) {
        state.push(action.payload);
        localStorage.removeItem("patients");
        localStorage.setItem("patients", JSON.stringify(state));
      },
      prepare(name, age, gender, consultation, insurance, prev) {
        return {
          payload: {
            name,
            age,
            imageSrc: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
            gender,
            consultation,
            insurance,
            prev,
          },
        };
      },
    },
  },
});

export const { patientsAdded } = patientsSlice.actions;
export const selectAllPatients = (state) => state.patientsdetails;
export default patientsSlice.reducer;
