import { Link } from "react-router-dom";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { patientsAdded } from "../features/patient/patientsSlice"
import { selectAllPatients } from "../features/patient/patientsSlice";

export default function AddPatienForm() {
  const patients = useSelector(selectAllPatients)

  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [consultation, setConsultation] = useState('')
  const [insurance, setInsurance] = useState('')
  const [prev, setPrev] = useState('')

  const onNameChanged = e => setName(e.target.value)
  const onageChanged = e => setAge(e.target.value)
  const onSpeicalizationChanged = e => setGender(e.target.value)
  const onconsultationChanged = e => setConsultation(e.target.value)
  const onInsuranceChanged = e => setInsurance(e.target.value)
  const onprevChanged = e => setPrev(e.target.value)

  const onSaveDoctor = () => {
      if(name && age && gender && consultation && insurance && prev)
      {
          dispatch(
            patientsAdded(name, age, gender, consultation, insurance, prev)
          )
          setName('')
          setAge('')
          setAge('')
          setGender('')
          setConsultation('')
          setInsurance('')
          setPrev('')
      }
      window.location.href = "/patientAdmin";
  }

  const canSave = Boolean(name) && Boolean(age) && Boolean(gender) && Boolean(consultation) && Boolean(insurance) && Boolean(prev)

    return (
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
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-green-400">
                    Patient Name:
                  </label>
                  
                </div>




                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="current-username"
                    required
                    placeholder="Name"
                value = {name}
                onChange={onNameChanged}
                    className="block w-full rounded-md border-0 py-1.5 text-green-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>


               <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-green-400">
                    Age
                  </label>
                  
                </div>



                
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="age"
                value = {age}
                onChange={onageChanged}
                    autoComplete="current-username"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-green-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-green-400">
                    Gender: 
                  </label>
                  
                </div>



                
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="current-username"
                    required
                    placeholder="gender"
                    value = {gender}
                    onChange={onSpeicalizationChanged}
                    className="block w-full rounded-md border-0 py-1.5 text-green-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>



              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-green-400">
                  consultation
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    id="phno"
                    name="phno"
                    type="text"
                    autoComplete="current-no"
                    required
                    placeholder="consultation"
                value = {consultation}
                onChange={onconsultationChanged}
                    className="block w-full rounded-md border-0 py-1.5 text-green-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-green-400">
                    Insurance
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    id="phno"
                    name="phno"
                    type="text"
                    autoComplete="current-no"
                    required
                    placeholder="insurance"
                value = {insurance}
                onChange={onInsuranceChanged}
                    className="block w-full rounded-md border-0 py-1.5 text-green-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-green-400">
                    Previous History
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    id="phno"
                    name="phno"
                    type="text"
                    autoComplete="current-no"
                    required
                    placeholder="prev"
                value = {prev}
                onChange={onprevChanged}
                    className="block w-full rounded-md border-0 py-1.5 text-green-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={onSaveDoctor}
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
    )
  }