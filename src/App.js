import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./components/FormPage";
import LandingPage from "./components/Home";

function App() {
  const [formData, setFormData] = useState([]);

  //Function to add New Data
  const addData = (data) => {
    setFormData((prevData) => [...prevData, data]);
  };

  //Function to delete data from local storage
  const deleteData = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);
    setFormData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData)); // Update localStorage
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              formData={formData}
              setFormData={setFormData}
              deleteData={deleteData}
            />
          }
        />
        <Route path="/adddata" element={<FormPage addData={addData} />} />
      </Routes>
    </Router>
  );
}

export default App;
