import React, { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";
import User from "./User";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        // console.log("API Response:", response.data); 
        setUsers(response.data.user || []); 
      })
      .catch((error) => {
        console.error("API Error:", error);
        setUsers([]); 
      });
  }, [filter]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => setFilter(e.target.value)}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        ></input>
      </div>
      <div>
        {users && users.length > 0 ? (
          users.map((user) => <User key={user._id} user={user} />)
        ) : (
          <div className="text-gray-500">No users found</div>
        )}
      </div>
    </>
  );
};

export default Users;
