import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { patientsAdded } from "../features/patient/patientsSlice";
import { selectAllPatients } from "../features/patient/patientsSlice";
import axios from "axios";
import { getToken, getRole } from "./LocalStorage";

export default function AddPatientForm() {
  const patients = useSelector(selectAllPatients);
  const authentication = (getRole() === "ADMIN" && getToken())

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [consultation, setConsultation] = useState('');
  const [insurance, setInsurance] = useState('');
  const [prev, setPrev] = useState('');

  const onNameChanged = (e) => setName(e.target.value);
  const onAgeChanged = (e) => setAge(e.target.value);
  const onGenderChanged = (e) => setGender(e.target.value);
  const onConsultationChanged = (e) => setConsultation(e.target.value);
  const onInsuranceChanged = (e) => setInsurance(e.target.value);
  const onPrevChanged = (e) => setPrev(e.target.value);

  const onSavePatient = () => {
    if (name && age && gender && consultation && insurance && prev) {
      const url = "http://localhost:8080/patients";
      const data = {
        patientName: name,
        patientAge: age, // Ensure age is a string
        patientGender: gender,
        patientConsultation: consultation,
        patientInsurance: insurance,
        patientPreviousConsultation: prev,
      };
      axios
        .post(url, data)
        .then((response) => {
          // Handle the success response here if needed
          console.log("POST request successful");
          window.location.href = "/patientAdmin"; // Redirect after successful POST
        })
        .catch((error) => {
          // Handle any errors here
          console.error("POST request error", error);
        });
    } else {
      // Handle the case where required fields are not filled
      console.error("Please fill in all required fields.");
    }

    setName('');
    setAge('');
    setGender('');
    setConsultation('');
    setInsurance('');
    setPrev('');
    //window.location.href = "/patientAdmin";
  };

  const canSave =
    Boolean(name) &&
    Boolean(age) &&
    Boolean(gender) &&
    Boolean(consultation) &&
    Boolean(insurance) &&
    Boolean(prev);

  return authentication ? (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-green-400">
            Patient Form
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="patientName" className="block text-sm font-medium leading-6 text-green-400">
                  Patient Name:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="patientName"
                  name="patientName"
                  type="text"
                  autoComplete="current-patientName"
                  required
                  placeholder="Name"
                  value={name}
                  onChange={onNameChanged}
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="patientAge" className="block text-sm font-medium leading-6 text-green-400">
                  Age
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="patientAge"
                  name="patientAge"
                  type="text" // Ensure age is entered as a string
                  placeholder="age"
                  value={age}
                  onChange={onAgeChanged}
                  autoComplete="current-patientAge"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="patientGender" className="block text-sm font-medium leading-6 text-green-400">
                  Gender:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="patientGender"
                  name="patientGender"
                  type="text"
                  autoComplete="current-patientGender"
                  required
                  placeholder="gender"
                  value={gender}
                  onChange={onGenderChanged}
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="patientConsultation" className="block text-sm font-medium leading-6 text-green-400">
                  Consultation
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="patientConsultation"
                  name="patientConsultation"
                  type="text"
                  autoComplete="current-consultation"
                  required
                  placeholder="consultation"
                  value={consultation}
                  onChange={onConsultationChanged}
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="patientInsurance" className="block text-sm font-medium leading-6 text-green-400">
                  Insurance
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="patientInsurance"
                  name="patientInsurance"
                  type="text"
                  autoComplete="current-insurance"
                  required
                  placeholder="insurance"
                  value={insurance}
                  onChange={onInsuranceChanged}
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="patientPreviousConsultation" className="block text-sm font-medium leading-6 text-green-400">
                  Previous History
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="patientPreviousConsultation"
                  name="patientPreviousConsultation"
                  type="text"
                  autoComplete="current-previous"
                  required
                  placeholder="prev"
                  value={prev}
                  onChange={onPrevChanged}
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onSavePatient}
                disabled={!canSave}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  ) : null;
}