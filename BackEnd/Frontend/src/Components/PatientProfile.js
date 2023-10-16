import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getToken, getRole } from "./LocalStorage";
export default function PatientProfile() {

  const authentication = (getToken() && getRole() === "ADMIN" || getRole() === "PATIENT")
  const [name, setName] = useState("");
  const [consultation, setConsultation] = useState("");
  const [gender, setGender] = useState("");
  const [insurance, setInsurance] = useState(0); // Ensure insurance is a number
  const [age, setAge] = useState("");
  const [prev, setPrev] = useState("");
  const [id, setId] = useState()
  const onNameChanged = (e) => setName(e.target.value);
  const onconsultationChanged = (e) => setConsultation(e.target.value);
  const onGenderChanged = (e) => setGender(e.target.value);
  const oninsuranceChanged = (e) => setInsurance(e.target.value); // Parse the insurance as an integer
  const onAgeChanged = (e) => setAge(e.target.value);
  const onprevChanged = (e) => setPrev(e.target.value);

  useEffect(() => {
    // Fetch the list of patients and select the first patient's ID
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:8080/patients");
        const patients = response.data;
        if (patients.length > 0) {
          // Select the ID of the first patient in the list
          const selectedId = patients[0].id;
          setId(selectedId);

          // Fetch and display the details of the selected patient
          const apiIdUrl = `http://localhost:8080/patients/${selectedId}`;
          const responsePatient = await axios.get(apiIdUrl);
          const patient = responsePatient.data;
          setName(patient.patientName);
          setAge(patient.patientAge);
          setGender(patient.patientGender);
          setConsultation(patient.patientConsultation);
          setPrev(patient.patientPreviousConsultation);
          setInsurance(patient.patientInsurance);
        }
      } catch (error) {
        console.error("Can't fetch patient", error);
      }
    };

    fetchPatients();
  }, []);
const onSavepatient = () => {
  if(name && consultation && gender && insurance && age && prev){
    const apiURL = `http://localhost:8080/patients/${id}`
    const data = {
      patientName: name,
      patientAge: age, // Ensure age is a string
      patientGender: gender, // There's no gender in your form; you need to add it or remove it from the data
      patientConsultation: consultation,
      patientPreviousConsultation: prev,
      patientInsurance: insurance,
    };
    console.log(data)
    axios 
      .put(apiURL, data)
      .then((response) => {
        console.log("PUT request successfuly")
        window.location.href = "/patientAdmin"
      })
      .catch((error) => {
        console.error("PUT request error", error)
      });
  }
  else
  {
    console.error("Please fill in all required fields.")
  }
}
  const canSave = Boolean(name) && Boolean(consultation) && Boolean(gender) && insurance > 0 && Boolean(age) && Boolean(prev);

  return authentication ? (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-green-400">
            Patient Profile
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="patientName" className="block text-sm font-medium leading-6 text-green-400">
                  patient Name:
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
                  type="text"
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
              <label htmlFor="patientSpecialization" className="block text-sm font-medium leading-6 text-green-400">
                Gender:
              </label>
            </div>
            <div className="mt-2">
              <input
                id="patientSpecialization"
                name="patientSpecialization"
                type="text"
                autoComplete="current-patientSpecialization"
                required
                placeholder="Gender" // Change "Specialization" to "Gender"
                value={gender}
                onChange={onGenderChanged}
                className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="patientconsultation" className="block text-sm font-medium leading-6 text-green-400">
                  consultation:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="patientconsultation"
                  name="patientconsultation"
                  type="text"
                  autoComplete="current-patientconsultation"
                  required
                  placeholder="consultation"
                  value={consultation}
                  onChange={onconsultationChanged}
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="patientinsurance" className="block text-sm font-medium leading-6 text-green-400">
                  insurance:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="patientinsurance"
                  name="patientinsurance"
                  type="text"
                  autoComplete="current-patientinsurance"
                  required
                  placeholder="insurance"
                  value={insurance}
                  onChange={oninsuranceChanged}
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="patientprev" className="block text-sm font-medium leading-6 text-green-400">
                  prev:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="patientprev"
                  name="patientprev"
                  type="text"
                  autoComplete="current-patientprev"
                  required
                  placeholder="prev"
                  value={prev}
                  onChange={onprevChanged}
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={onSavepatient}
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