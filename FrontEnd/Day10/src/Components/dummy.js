

  import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { patientsAdded } from "../features/patient/patientsSlice"
import { selectAllPatients } from "../features/patient/patientsSlice"


const AddPatienForm = () => {
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
    }

    const canSave = Boolean(name) && Boolean(age) && Boolean(gender) && Boolean(consultation) && Boolean(insurance) && Boolean(prev)

    return (
        <section>
            <form>
                <label htmlFor="doctorName">Patient name: </label>
                <input 
                type="text"
                name="doctor name"
                placeholder="Name"
                value = {name}
                onChange={onNameChanged}
                />
                <label htmlFor="age">Patient age: </label>
                <input 
                type="text"
                name="age"
                placeholder="age"
                value = {age}
                onChange={onageChanged}
                />
                <label htmlFor="gender">Patient gender:  </label>
                <input 
                type="text"
                name="gender"
                placeholder="gender"
                value = {gender}
                onChange={onSpeicalizationChanged}
                />
                <label htmlFor="consultation">Patient consultation: </label>
                <input 
                type="text"
                name="consultationerience"
                placeholder="consultation"
                value = {consultation}
                onChange={onconsultationChanged}
                />
                <label htmlFor="doctorName">Patient Insurance: </label>
                <input 
                type="text"
                name="doctor age"
                placeholder="insurance"
                value = {insurance}
                onChange={onInsuranceChanged}
                />
                <label htmlFor="doctorName">Patient previous history: </label>
                <input 
                type="text"
                name="doctor prev"
                placeholder="prev"
                value = {prev}
                onChange={onprevChanged}
                />
                <button type="button" onClick={onSaveDoctor} disabled={!canSave}>Save</button>
            </form>
        </section>
    )
}


export default AddPatienForm