import React, { useState } from "react";
import { AiFillCloseSquare, AiFillEdit } from "react-icons/ai";

import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementPatientFunction,
  incrementDoctorFunction,
} from "../features/counter/counterSlice";

function Dashboard() {
  const [patientValue, setPatientValue] = useState(0);
  const [doctorValue, setDoctorValue] = useState(0);

  const dispatch = useDispatch();

  const storePatientValue = useSelector((state) => state.counter.patientCount);
  const storeDoctorValue = useSelector((state) => state.counter.doctorCount);
  const storeTotalCount = useSelector((state) => state.counter.totalCount);

  const doctor = Number(doctorValue) || 0;
  const patient = Number(patientValue) || 0;

  // Define a state variable to track whether PatientEditing is enabled
  const [isPatientEditing, setIsPatientEditing] = useState(false);
  const [isDoctorEditing, setIsDoctorEditing] = useState(false);


  // Function to handle changes in the input field
  const handlePatientChange = (event) => {
    setPatientValue(event.target.value);
  };

  const handleDoctorChange = (event) => {
    setDoctorValue(event.target.value);
  };

  // Function to toggle PatientEditing
  const togglePatientEditing = () => {
    setIsPatientEditing(!isPatientEditing);
  };
  const toggleDoctorEditing = () => {
    setIsDoctorEditing(!isDoctorEditing);
  };
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>ACTIVE USERS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>32</h1>

          
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>PATIENTS</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          {isPatientEditing ? (
            <main>
              <input
                type="text"
                value={patientValue}
                onChange={handlePatientChange}
                placeholder="Enter text..."
                style={{ backgroundColor: 'transparent', border: 'none', width: 'auto' }}
              ></input>
              <button onClick={() => dispatch(incrementPatientFunction(patient))}>
                Save
              </button>
            </main>
          ) : (
            <h1>{storePatientValue}</h1>
          )}
          <button onClick={togglePatientEditing} style={{ backgroundColor: 'transparent', border: 'none'}}>
        {isPatientEditing ? <AiFillCloseSquare /> : <AiFillEdit />}
      </button>

        </div>

        
        <div className="card">
          <div className="card-inner">
            <h3>DOCTORS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          {isDoctorEditing ? (
            <main>
              <input
                type="text"
                value={doctorValue}
                onChange={handleDoctorChange}
                placeholder="Enter text..."
                style={{ backgroundColor: 'transparent', border: 'none', width: 'auto' }}
              ></input>
              <button onClick={() => dispatch(incrementDoctorFunction(doctor))}>
                Save
              </button>
            </main>
          ) : (
            <h1>{storeDoctorValue}</h1>
          )}
          <button onClick={toggleDoctorEditing} style={{ backgroundColor: 'transparent', border: 'none', width: 'auto' }}>
          {isDoctorEditing ? <AiFillCloseSquare /> : <AiFillEdit />}
        </button>

        </div>

        <div className="card">
          <div className="card-inner">
            <h3>TOTAL USERS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>{storeTotalCount}</h1>
        </div>
      </div>


        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Dashboard