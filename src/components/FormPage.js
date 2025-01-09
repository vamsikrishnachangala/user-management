import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage({ addData }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(""); // For validation error messages
  const navigate = useNavigate();

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate gender field
    if (!gender) {
      setError("Please select a gender.");
      return;
    }

    // Add data and navigate back toi the landing page
    setError("");
    addData({ firstName, lastName, email, gender });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Add User
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name field */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your first name"
              required
            />
          </div>

          {/* Last Name field */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your last name"
              required
            />
          </div>

          {/* Email field */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Gender field */}
          <div>
            <label className="block text-sm font-medium mb-3 text-gray-700">
              Gender
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Female</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={gender === "other"}
                  onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Other</span>
              </label>
            </div>
            {/* Gender validation */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex space-x-4">
            <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-200"
            >
            Submit
            </button>
            {/* Cancel Button*/}
            <button
            onClick={() => navigate("/")}
            className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition duration-200"
            >
            Cancel
            </button>
            </div>
          
        </form>
      </div>
    </div>
  );
}

export default FormPage;
