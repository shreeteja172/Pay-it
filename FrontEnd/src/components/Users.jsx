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
      .get(
        `${import.meta.env.VITE_BACKEND_APP_URL}/api/v1/user/bulk?filter=` +
          filter,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const currentUserId = JSON.parse(atob(token.split(".")[1])).userId;
        const filteredUsers =
          response.data.user?.filter((user) => user._id !== currentUserId) ||
          [];
        setUsers(filteredUsers);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setUsers([]);
      });
  }, [filter]);

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-8">
        <div className="relative">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 tracking-tight">
            Users
          </h2>
          <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
        </div>

        <div className="relative w-full max-w-md group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 hover:border-indigo-200/50 transition-all duration-300 hover:shadow-indigo-500/10">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <div className="w-5 h-5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                  ></path>
                </svg>
              </div>
            </span>

            <input
              onChange={(e) => setFilter(e.target.value)}
              type="text"
              placeholder="Search users..."
              className="w-full pl-12 pr-4 py-3 bg-transparent border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all duration-200 text-gray-700 placeholder-gray-400 font-medium"
            />

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 via-purple-400/10 to-blue-400/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-105"></div>

        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 overflow-hidden">
          <div className="absolute top-4 right-8 w-32 h-32 bg-gradient-to-r from-indigo-400/8 to-blue-400/8 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-4 left-8 w-24 h-24 bg-gradient-to-r from-purple-400/8 to-indigo-400/8 rounded-full blur-2xl animate-pulse delay-1000"></div>

          <div className="relative z-10">
            {users && users.length > 0 ? (
              <div className="space-y-3">
                {users.map((user, index) => (
                  <div
                    key={user._id}
                    className="group/item relative transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 rounded-2xl p-4 -mx-4 hover:bg-gradient-to-r hover:from-indigo-50/30 hover:to-blue-50/30 hover:shadow-lg hover:shadow-indigo-500/10 border border-transparent hover:border-indigo-100/50"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 blur-sm"></div>

                    <div className="relative z-10">
                      <User user={user} />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover/item:translate-x-[-100%] transition-transform duration-700 pointer-events-none rounded-2xl"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="relative group/empty">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-full blur-xl opacity-0 group-hover/empty:opacity-100 transition-opacity duration-300 transform scale-150"></div>

                  <div className="relative w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-gray-500"
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
                  </div>
                </div>

                <p className="text-lg font-medium bg-gradient-to-r from-gray-600 to-gray-500 bg-clip-text text-transparent">
                  No users found
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Try adjusting your search filters
                </p>
              </div>
            )}
          </div>

          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-indigo-200/10 to-transparent rounded-br-3xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-200/10 to-transparent rounded-tl-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Users;
