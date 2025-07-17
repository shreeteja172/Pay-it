import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100/50 hover:bg-gray-50/50 transition-all duration-200">
      <div className="flex items-center space-x-4">
        <div className="rounded-full h-12 w-12 bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center shadow-md">
          <span className="text-xl font-semibold text-white uppercase">
            {user.firstName[0]}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-gray-800 tracking-tight">
            {user.firstName} {user.lastName}
          </span>
          <span className="text-sm text-gray-500">{user.email || "User"}</span>
        </div>
      </div>

      <div>
        <Button
          onClick={() => {
            navigate(
              "/send?id=" +
                user._id +
                "&name=" +
                user.firstName +
                " " +
                user.lastName
            );
          }}
          label={
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
              Send Money
            </span>
          }
          className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-xl shadow-md hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
        />
      </div>
    </div>
  );
};

export default User;