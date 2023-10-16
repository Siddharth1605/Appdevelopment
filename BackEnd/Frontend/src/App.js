// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import AdminDashboard from "./Components/AdminDashboard";
import Layout from "./Components/Layout";
import Exampletest from "./Pages/Exampletest";
import DAdmin from "./Components/DAdmin";
import AddDoctorForm from "./Components/AddDoctorForm";
import Signup from "./Components/Signup";
import ForgotPassword from "./Components/ForgotPassword"
import PatientAdmin from "./Components/PatientAdmin"
import Userdash from "./Components/Userdash";
import Doctordash from "./Components/Doctordash";
import AddPatientForm from "./Components/AddPatientForm";
import LoginOptions from "./Components/LoginOptions";
import Patientlogin from "./Components/Patientlogin";
import Doctorlogin from "./Components/Doctorlogin";
import Adminlogin from "./Components/Adminlogin";
import Footer from "./Footer/Footer";
import Generalinfo from "./Footer/Generalinfo";
import Consultations from "./Footer/Consultations";
import Privacypolicy from "./Footer/Privacypolicy";
import Tos from "./Footer/Tos";
import Hiw from "./Footer/Hiw";
import Appointment from "./Components/Appointment";
import Payment from "./Components/Payment";
import { getToken, getRole } from "./Components/LocalStorage";
import EditDoctorForm from "./Components/EditDoctorForm";
import EditPatientForm from "./Components/EditPatientForm";
import PatientProfile from "./Components/PatientProfile";
import DoctorProfile from "./Components/DoctorProfile";
function App() {
  const userRole = getRole()
  console.log(userRole)
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
        <Route
        path="/"
        element={
          <Layout>
            {/* Render components based on the user's role */}
            {userRole === "ADMIN" ? <AdminDashboard /> : null}
            {userRole === "DOCTOR" ? <Userdash /> : null}
            {userRole === "PATIENT" ? <Doctordash /> : null}
            {userRole === null ? <Home /> : null}
          </Layout>
        }
      />
          <Route
          path="/admin"
            element={
              <Layout> 
                <AdminDashboard /> 
              </Layout>
            }
          />
          <Route path="/editDoctor/:id" element = {<EditDoctorForm/>} />
          <Route path="/editPatient/:id" element = {<EditPatientForm/>} />
          <Route path="/patientProfile" element={<PatientProfile />} />
          <Route path="/doctorProfile" element={<DoctorProfile />} />

          <Route
          path="/gi"
            element={
              <Layout> 
              <Generalinfo/>
              </Layout>
            }
          />
          <Route
          path="/appointment"
            element={
              <Layout> 
              <Appointment/>
              </Layout>
            }
          />
          <Route
          path="/cons"
            element={
              <Layout> 
              <Consultations/>
              </Layout>
            }
          />

          <Route
          path="/pp"
            element={
              <Layout> 
              <Privacypolicy/>
              </Layout>
            }
          />

        <Route
          path="/hiw"
            element={
              <Layout> 
              <Hiw/>
              </Layout>
            }
          />

          <Route
          path="/tos"
            element={
              <Layout> 
              <Tos/>
              </Layout>
            }
          />
          <Route
          path="/userdash"
            element={
              <Layout> 
                <Userdash /> 
              </Layout>
            }
          /><Route
          path="/doctordashboard"
            element={
              <Layout>
                <Doctordash />
                </Layout> 
            }
          />
          <Route
          path="/payment"
            element={
                <Payment /> 
            }
          />
          <Route
          path="/doctorAdmin"
            element={
                <DAdmin /> 
            }
          />
          <Route
          path="/fpwd"
            element={
                <ForgotPassword /> 
            }
          />
          <Route
          path="/patientAdmin"
            element={
                <PatientAdmin /> 
            }
          />
          <Route
          path="/forgot"
            element={
                <ForgotPassword /> 
            }
          />
          <Route
          path="/loginoptions"
            element={
                <LoginOptions /> 
            }
          />
          <Route
          path="/patientLogin"
            element={
                <Patientlogin /> 
            }
          />
          <Route
          path="/doctorLogin"
            element={
                <Doctorlogin /> 
            }
          />
         
          <Route
          path="/adminLogin"
            element={
                <Adminlogin /> 
            }
          />
          <Route
          path="/signup"
            element={
                <Signup /> 
            }
          />
        
          <Route
          path="/addDoctor"
            element={
                <AddDoctorForm /> 
            }
          />
          <Route
          path="/addPatient"
            element={
                <AddPatientForm /> 
            }
          />
          <Route
            path="/legal"
            element={
              <Layout> 
                <Legal /> 
              </Layout>
            }
          />
          <Route
            path="/appointment"
            element={
              <Layout> 
                <Appointment />
              </Layout>
            }
          />
          <Route
          path="/test"
            element={
              <Layout> 
                <Exampletest /> 
              </Layout>
            }
          />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
