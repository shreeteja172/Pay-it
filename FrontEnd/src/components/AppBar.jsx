import React from "react";
import { Context } from "../lib/contextapi";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AppBar = () => {
  const navigate = useNavigate();
  const { firstName } = useContext(Context);
  const { lastName } = useContext(Context);
  const handleLogic = () => {
    axios
      .put(
        "http://localhost:3000/api/v1/user/settings",
        {
          firstName: firstName,
          lastName: lastName,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log("Settings updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error updating settings:", error);
        alert("Failed to update settings. Please try again.");
      });
    navigate("/settings");
  };

  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">Pay-it</div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div
            onClick={() => {
              handleLogic();
            }}
            className="flex flex-col justify-center h-full text-xl"
          >
            {firstName[0] + " " + lastName[0]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
