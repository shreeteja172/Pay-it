import React, { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";
import User from "./User";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        const currentUserId = JSON.parse(atob(token.split('.')[1])).userId;
        const filteredUsers = response.data.user?.filter(user => user._id !== currentUserId) || [];
        setUsers(filteredUsers);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setUsers([]);
      });
  }, [filter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 tracking-tight">
            Users
          </h2>
          <div className="relative w-full max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"></path>
              </svg>
            </span>
            <input
              onChange={(e) => setFilter(e.target.value)}
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100/50 p-6">
          {users && users.length > 0 ? (
            <div className="space-y-4">
              {users.map((user) => (
                <div
                  key={user._id}
                  className="transform transition-all duration-200 hover:scale-[1.005] hover:bg-gray-50/50 rounded-lg p-3 -mx-3"
                >
                  <User user={user} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <p className="mt-2 text-gray-500 text-sm font-medium">No users found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;