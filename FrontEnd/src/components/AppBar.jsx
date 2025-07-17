import React from "react";
import { Context } from "./Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
  const navigate = useNavigate();
  const { firstName, lastName } = useContext(Context);

  const handleAvatarClick = () => {
    navigate("/settings");
  };

  return (
    <div className="bg-white shadow-lg border-b border-gray-100/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="https://imgs.search.brave.com/SRmmR8bu0bHySGi6nVbnAjejWJbJIuqFhdiBMOJ4IoY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzM3LzE3LzI1/LzM2MF9GXzUzNzE3/MjU4OV9kTzVtS0o1/UmN0RzA3YzFPQ0l4/ajhWN2NpbmZsWGFu/Wi5qcGc"
            alt="Pay-it Logo"
            className="h-8 w-8 transform transition-transform duration-300 hover:scale-110"
          />
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
            Pay-it
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm font-medium text-gray-600">
            Hello, {firstName}
          </div>
          <div
            onClick={handleAvatarClick}
            className="rounded-full h-10 w-10 bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center shadow-md cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="text-lg font-semibold text-white uppercase">
              {firstName[0]}{lastName[0]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;