import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-neutral-900 rounded-xl border border-neutral-800 hover:bg-neutral-800 transition-all duration-200">
      
      {/* User Info */}
      <div className="flex items-center space-x-4">
        <div className="rounded-full h-12 w-12 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-inner">
          <span className="text-xl font-semibold text-white uppercase">
            {user.firstName[0]}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-white tracking-tight">
            {user.firstName} {user.lastName}
          </span>
          <span className="text-sm text-neutral-400">{user.email || "User"}</span>
        </div>
      </div>

      {/* Send Money Button */}
      <div className="w-full sm:w-auto">
        <Button
          onClick={() =>
            navigate(
              "/send?id=" +
                user._id +
                "&name=" +
                user.firstName +
                " " +
                user.lastName
            )
          }
          label={
            <span className="flex items-center justify-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              Send Money
            </span>
          }
          className="w-full sm:w-auto px-4 py-2 bg-neutral-100 text-neutral-900 font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default User;
