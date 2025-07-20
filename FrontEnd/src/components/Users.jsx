import React, { useContext } from "react";
import Button from "./Button";
import User from "./User";
import { Context } from "../lib/contextapi";

function normalize(str) {
  if (typeof str !== "string") return "";
  return str.toLowerCase().replace(/[^a-z]/g, "");
}

const Users = () => {
  const { users, setFilter, filter } = useContext(Context);

  const filteredUsers = users.filter((user) => {
    if (!filter || filter.trim() === "") return true;

    const firstName = user.firstName || "";
    const lastName = user.lastName || "";
    const fullName = `${firstName} ${lastName}`;

    const searchTerm = normalize(filter);
    const normalizedFirstName = normalize(firstName);
    const normalizedLastName = normalize(lastName);
    const normalizedFullName = normalize(fullName);

    return (
      normalizedFirstName.includes(searchTerm) ||
      normalizedLastName.includes(searchTerm) ||
      normalizedFullName.includes(searchTerm)
    );
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-zinc-100">Users</h2>

        <div className="w-full max-w-md">
          <div className="flex items-center border border-zinc-700 rounded-lg px-3 py-2 bg-zinc-800 shadow-sm">
            <svg
              className="w-5 h-5 text-zinc-400 mr-2"
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
            <input
              type="text"
              placeholder="Search users..."
              onChange={(e) => setFilter(e.target.value)}
              className="w-full outline-none bg-transparent text-sm text-zinc-100 placeholder-zinc-500"
            />
          </div>
        </div>
      </div>

      {/* Users List */}
      <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 shadow-sm">
        {filteredUsers && filteredUsers.length > 0 ? (
          <div className="space-y-3">
            {filteredUsers.map((user) => (
              <div
                key={user._id}
                className="border border-zinc-700 rounded-lg px-4 py-3 hover:bg-zinc-700/50 transition"
              >
                <User user={user} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-zinc-400 py-10">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-zinc-500"
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
            <p className="text-base font-medium text-zinc-300">No users found</p>
            <p className="text-sm text-zinc-500 mt-1">
              Try adjusting your search filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
