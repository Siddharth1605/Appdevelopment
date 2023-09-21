// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import AdminDashboard from "./Components/AdminDashboard";
import Layout from "./Components/Layout";
import Exampletest from "./Pages/Exampletest";
import Login from "./Components/Login";


function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route
          path="/"
            element={
              <Layout> 
                <Home /> 
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
          <Route
          path="/login"
            element={
                <Login /> 
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
