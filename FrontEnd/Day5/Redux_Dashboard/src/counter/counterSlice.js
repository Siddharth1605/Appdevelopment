import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    patientCount: 3230,
    doctorCount: 100,
    totalCount: 4230,
  }
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementPatientFunction: (state, action) => {
      state.patientCount = action.payload;
      state.totalCount = state.patientCount + state.doctorCount;
    },
    incrementDoctorFunction: (state, action) => {
      state.doctorCount = action.payload;
      state.totalCount = state.patientCount + state.doctorCount;
    },
  },
});

export const { incrementPatientFunction, incrementDoctorFunction } = counterSlice.actions;

export default counterSlice.reducer;
