import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { doctorsAdded } from "../features/doctor/doctorsSlice"
import { selectAllDoctors } from "../features/doctor/doctorsSlice"

export default function AddDoctorForm() {
    const doctors = useSelector(selectAllDoctors)

    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [qualification, setQualification] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [exp, setExp] = useState('')
    const [age, setAge] = useState('')
    const [rating, setRating] = useState('')

    const onNameChanged = e => setName(e.target.value)
    const onQualificationChanged = e => setQualification(e.target.value)
    const onSpeicalizationChanged = e => setSpecialization(e.target.value)
    const onExpChanged = e => setExp(e.target.value)
    const onAgeChanged = e => setAge(e.target.value)
    const onRatingChanged = e => setRating(e.target.value)

    const onSaveDoctor = () => {
        if(name && qualification && specialization && exp && age && rating)
        {
            dispatch(
                doctorsAdded(name, qualification, specialization, exp, age, rating)
            )
            setName('')
            setAge('')
            setQualification('')
            setSpecialization('')
            setExp('')
            setAge('')
            setRating('')
        }
      window.location.href = "/doctorAdmin";

    }

    const canSave = Boolean(name) && Boolean(qualification) && Boolean(specialization) && Boolean(exp) && Boolean(age) && Boolean(rating)

    return (
        <>
         
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-green-400">
                  Doctor Form
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6">
                
  
              <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-green-400">
                      Doctor Name:
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
                  onChange={onAgeChanged}
                      autoComplete="current-username"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-green-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-green-400">
                      Specialization: 
                    </label>
                    
                  </div>
  
  
  
                  
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="current-username"
                      required
                      placeholder="Specialization"
                      value = {specialization}
                      onChange={onSpeicalizationChanged}
                      className="block w-full rounded-md border-0 py-1.5 text-green-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
  
  
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-green-400">
                    Qualification: 
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
                  value = {qualification}
                  onChange={onQualificationChanged}
                      className="block w-full rounded-md border-0 py-1.5 text-green-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-green-400">
                      Experience
                    </label>
                    
                  </div>
                  <div className="mt-2">
                    <input
                      id="phno"
                      name="phno"
                      type="text"
                      autoComplete="current-no"
                      required
                      placeholder="Experience"
                  value = {exp}
                  onChange={onExpChanged}
                      className="block w-full rounded-md border-0 py-1.5 text-green-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-green-400">
                      Rating
                    </label>
                    
                  </div>
                  <div className="mt-2">
                    <input
                      id="phno"
                      name="phno"
                      type="text"
                      autoComplete="current-no"
                      required
                      placeholder="rating"
                  value = {rating}
                  onChange={onRatingChanged}
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
