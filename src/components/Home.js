import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage({ formData, setFormData, deleteData }) {
  const navigate = useNavigate();

  // Load data from localStorage on initial render
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    console.log("Stored Data", storedData);
    setFormData(storedData);
  }, [setFormData]);

  // Save data to localStorage whenever formData changes
  useEffect(() => {
    if (formData.length > 0) {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]);

  return (
    <div className="min-h-screen bg-gray-100 p-8 bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="max-w-6xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">User List</h1>

        {/* Add New Data Button */}
        <div className="text-right mb-4">
          <button
            onClick={() => navigate("/adddata")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add New Data
          </button>
        </div>

        {formData.length > 0 ? (
          <ul className="space-y-4">
            {formData.map((data, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md"
              >
                <div>
                  <h2 className="text-lg font-semibold">{`${data.firstName} ${data.lastName}`}</h2>
                  <p className="text-sm text-gray-600">Email: {data.email}</p>
                  <p className="text-sm text-gray-600">Gender: {data.gender}</p>
                </div>
                <button
                  onClick={() => deleteData(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center">No data submitted yet.</p>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
