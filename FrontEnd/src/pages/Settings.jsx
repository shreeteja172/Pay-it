import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../lib/contextapi";
import { toast } from "react-hot-toast";

const Settings = () => {
  const navigate = useNavigate();
  const { firstName, lastName } = useContext(Context);
  const [formData, setFormData] = useState({
    firstName: firstName || "",
    lastName: lastName || "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateData = {};
      if (formData.firstName !== firstName)
        updateData.firstName = formData.firstName;
      if (formData.lastName !== lastName)
        updateData.lastName = formData.lastName;
      if (formData.password) updateData.password = formData.password;

      if (Object.keys(updateData).length === 0) {
        alert("No changes to save.");
        return;
      }

      await axios.put(
        `${import.meta.env.VITE_BACKEND_APP_URL}/api/v1/user/settings`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      // alert("Settings updated successfully!");
      toast.success("Settings updated successfully!");
      setFormData({ ...formData, password: "" });
    } catch (error) {
      // console.error("There was an error updating settings:", error);
      toast.error(`Failed to update settings: ${error.response?.data?.message || "Please try again later."}`);

      alert("Failed to update settings. Please try again.");
    }
  };

  const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.reload();
  navigate("/"); 
};


  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      <header className="border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-white">Settings</h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="text-sm px-4 py-2 border border-neutral-700 rounded-md hover:bg-neutral-800 transition"
          >
            Back to Dashboard
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-medium mb-6 border-b border-neutral-800 pb-4">
            Update Profile
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="firstName" className="block text-sm mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-1">
                New Password (leave blank to keep current)
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                minLength="6"
                className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm font-medium transition"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="px-4 py-2 bg-neutral-800 border border-neutral-700 text-sm rounded-md hover:bg-neutral-700 transition"
              >
                Cancel
              </button>
            </div>
          </form>
          <div className="mt-12 bg-neutral-900 border border-neutral-800 p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-medium mb-4 border-b border-neutral-800 pb-3">
              Danger Zone
            </h2>

            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-medium transition"
            >
              Log Out
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
