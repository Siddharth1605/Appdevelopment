import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getToken, getRole } from "./LocalStorage";
export default function EditDoctorForm() {

  const authentication = (getToken() && getRole() === "ADMIN")
  const { id } = useParams();
  console.log(id)
  const [name, setName] = useState("");
  const [qualification, setQualification] = useState("");
  const [gender, setGender] = useState("");
  const [exp, setExp] = useState(0); // Ensure experience is a number
  const [age, setAge] = useState("");
  const [rating, setRating] = useState("");

  const onNameChanged = (e) => setName(e.target.value);
  const onQualificationChanged = (e) => setQualification(e.target.value);
  const onGenderChanged = (e) => setGender(e.target.value);
  const onExpChanged = (e) => setExp(parseInt(e.target.value)); // Parse the experience as an integer
  const onAgeChanged = (e) => setAge(e.target.value);
  const onRatingChanged = (e) => setRating(e.target.value);

  useEffect(() => {
    const apiIdUrl = `http://localhost:8080/doctors/${id}`;
    const fetchDoctorById = async () => {
      try {
        const response = await axios.get(apiIdUrl); // Await the response
        const doctor = response.data;
        console.log(doctor);

        // Assuming the API response is an object with properties
        setName(doctor.doctorName);
        setAge(doctor.doctorAge);
        setGender(doctor.doctorGender);
        setQualification(doctor.doctorQualification);
        setRating(doctor.doctorRating);
        setExp(doctor.doctorExperience);
      } catch (error) {
        console.error("Can't fetch doctor", error);
      }
    };

    fetchDoctorById();
  }, [id]); 
const onSaveDoctor = () => {
  if(name && qualification && gender && exp && age && rating){
    const apiURL = `http://localhost:8080/doctors/${id}`
    const data = {
      doctorName: name,
      doctorAge: age, // Ensure age is a string
      doctorGender: gender, // There's no gender in your form; you need to add it or remove it from the data
      doctorQualification: qualification,
      doctorRating: rating,
      doctorExperience: exp,
    };
    axios 
      .put(apiURL, data)
      .then((response) => {
        console.log("PUT request successfuly")
        window.location.href = "/doctorAdmin"
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
  const canSave = Boolean(name) && Boolean(qualification) && Boolean(gender) && exp > 0 && Boolean(age) && Boolean(rating);

  return authentication ? (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-green-400">
            Edit Doctor Form
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="doctorName" className="block text-sm font-medium leading-6 text-green-400">
                  Doctor Name:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="doctorName"
                  name="doctorName"
                  type="text"
                  autoComplete="current-doctorName"
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
                <label htmlFor="doctorAge" className="block text-sm font-medium leading-6 text-green-400">
                  Age
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="doctorAge"
                  name="doctorAge"
                  type="text"
                  placeholder="age"
                  value={age}
                  onChange={onAgeChanged}
                  autoComplete="current-doctorAge"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="doctorSpecialization" className="block text-sm font-medium leading-6 text-green-400">
                  Gender:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="doctorSpecialization"
                  name="doctorSpecialization"
                  type="text"
                  autoComplete="current-doctorSpecialization"
                  required
                  placeholder="Specialization"
                  value={gender}
                  onChange={onGenderChanged}
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="doctorQualification" className="block text-sm font-medium leading-6 text-green-400">
                  Qualification:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="doctorQualification"
                  name="doctorQualification"
                  type="text"
                  autoComplete="current-doctorQualification"
                  required
                  placeholder="Qualification"
                  value={qualification}
                  onChange={onQualificationChanged}
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="doctorExperience" className="block text-sm font-medium leading-6 text-green-400">
                  Experience:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="doctorExperience"
                  name="doctorExperience"
                  type="number"
                  autoComplete="current-doctorExperience"
                  required
                  placeholder="Experience"
                  value={exp}
                  onChange={onExpChanged}
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="doctorRating" className="block text-sm font-medium leading-6 text-green-400">
                  Rating:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="doctorRating"
                  name="doctorRating"
                  type="text"
                  autoComplete="current-doctorRating"
                  required
                  placeholder="rating"
                  value={rating}
                  onChange={onRatingChanged}
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
  ) : null;
}