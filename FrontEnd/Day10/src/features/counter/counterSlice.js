import { createSlice } from "@reduxjs/toolkit";

// Function to retrieve counter values from localStorage
const loadCounterState = () => {
  try {
    const serializedState = localStorage.getItem("counterState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const initialState = loadCounterState() || {
  patientCount: 3230,
  doctorCount: 100,
  totalCount: 4230,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementPatientFunction: (state, action) => {
      state.patientCount = action.payload;
      state.totalCount = state.patientCount + state.doctorCount;
      // Save the updated state to localStorage
      localStorage.setItem("counterState", JSON.stringify(state));
    },
    incrementDoctorFunction: (state, action) => {
      state.doctorCount = action.payload;
      state.totalCount = state.patientCount + state.doctorCount;
      // Save the updated state to localStorage
      localStorage.setItem("counterState", JSON.stringify(state));
    },
  },
});

export const { incrementPatientFunction, incrementDoctorFunction } =
  counterSlice.actions;

export default counterSlice.reducer;
