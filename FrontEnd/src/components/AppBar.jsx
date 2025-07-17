import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../lib/contextapi";

const AppBar = () => {
  const navigate = useNavigate();
  const { firstName, lastName } = useContext(Context);
  
  const handleAvatarClick = () => {
    navigate("/settings");
  };
  
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-6">
      <div className="relative max-w-6xl mx-auto bg-white/80 backdrop-blur-xl shadow-2xl border border-gray-100/20 rounded-full px-6 py-4 before:absolute before:inset-0 before:bg-gradient-to-r before:from-indigo-50/30 before:via-transparent before:to-blue-50/30 before:pointer-events-none before:rounded-full">
        <div className="relative flex justify-between items-center">
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img
              src="https://imgs.search.brave.com/SRmmR8bu0bHySGi6nVbnAjejWJbJIuqFhdiBMOJ4IoY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzM3LzE3LzI1/LzM2MF9GXzUzNzE3/MjU4OV9kTzVtS0o1/UmN0RzA3YzFPQ0l4/ajhWN2NpbmZsWGFu/Wi5qcGc"
              alt="Pay-it Logo"
              className="relative h-8 w-8 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 drop-shadow-lg"
            />
          </div>
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 animate-pulse">
            Pay-it
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="text-sm font-medium text-gray-600 transition-all duration-300 hover:text-indigo-600 px-3 py-1.5 rounded-full hover:bg-indigo-50/50 backdrop-blur-sm">
              Hello, 
              <span className="ml-1 font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                {firstName}
              </span>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin blur-sm"></div>
            
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-md scale-110"></div>
            
            <div
              onClick={handleAvatarClick}
              className="relative rounded-full h-10 w-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-indigo-500/25 ring-2 ring-white/50 hover:ring-indigo-300/50 transform hover:-translate-y-0.5"
            >
              <span className="text-lg font-bold text-white uppercase tracking-wide drop-shadow-sm">
                {firstName[0]}{lastName[0]}
              </span>
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;